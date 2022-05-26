package Tar5

//Gets its input from a JackTokenizer and writes its output using the VMWriter
//Organized as a series of compilexxx routines, xxx being a syntactic element in the Jack language
//Contract:
//  *Each compilexxx routine should read xxx from the input, advance() the input exactly
//        beyond xxx, and emit to the output VM code effecting the semantics of xxx
//  *Thus compilexxx should be called only if xxx is the current syntactic element
//  *If xxx is part of an expression and thus has a value, the emitted VM code should
//        compute this value and leave it at the top of the VM’s stack
class CompilationEngine {

  var path : String
  var parser : Tokenizer
  var codeWriter : VMWriter
  var classTable : SymbolTable
  var symbol : Symbol
  var name : String
  var type : String
  var kind : Symbol.KIND
  var currentClass : String
  public static var _labelIndex:int as labelIndex = 0

  public construct(inputFile : String, outputFile : String) {
    parser = new Tokenizer(inputFile)
    codeWriter = new VMWriter(outputFile)
  }


  public function CompileClass() {
    classTable = new SymbolTable()
    parser.advance()
    // class
    parser.advance()
    // className
    currentClass = parser.getToken()
    parser.advance()
    // {
    parser.advance()

    while (parser.getToken() == "static" || parser.getToken() == "field")
      CompileClassVarDec()

    while (parser.getToken() == "constructor" || parser.getToken() == "function" || parser.getToken() == "method")
      CompileSubroutineDec()
  }


  public function CompileClassVarDec() {
    // static | field
    if (parser.getToken() == "static")
      kind = Symbol.KIND.STATIC
    else
      kind = Symbol.KIND.FIELD
    parser.advance()

    type = parser.getToken()
    parser.advance()
    name = parser.getToken()
    classTable.define(name, type, kind)
    parser.advance()

    while (parser.getToken() == ",") {
      // ,
      parser.advance()
      name = parser.getToken()
      classTable.define(name, type, kind)
      parser.advance()
    }
    // ;
    parser.advance()
  }

  public function CompileSubroutineDec() {
    classTable.startSubroutine()

    // consructor | function | method
    if (parser.getToken() == "method") {
      classTable.define("this", currentClass, Symbol.KIND.ARG)
    }
    parser.advance()

    // void | type -could be a keyword or an identifier
    parser.advance()

    // subroutineName
    parser.advance()

    // (
    parser.advance()

    CompileParameterList()

    // )
    parser.advance()
    CompileSubroutineBody()
  }

  public function CompileParameterList() {
    if (parser.getToken() != ")") {
      // type -could be a keyword or an identifier
      type = parser.getToken()
      parser.advance()

      // varName
      name = parser.getToken()
      parser.advance()

      classTable.define(name, type, Symbol.KIND.ARG)

      while (parser.getToken() == ",") {
        // ,
        parser.advance()

        // type -could be a keyword or an identifier
        type = parser.getToken()
        parser.advance()

        // varName
        name = parser.getToken()
        parser.advance()
        classTable.define(name, type, Symbol.KIND.ARG)
      }
    }
  }

  public function CompileSubroutineBody() {
    // {
    parser.advance()

    while (parser.getToken() == "var")
      CompileVarDec()

    CompileStatements()

    // {
    parser.advance()
  }

  public function CompileVarDec() {
    // var
    parser.advance()

    // type -could be a keyword or an identifier
    type = parser.getToken()
    parser.advance()

    // varName
    name = parser.getToken()
    parser.advance()
    classTable.define(name, type, Symbol.KIND.VAR)

    while (parser.getToken() == ",") {
      // ,
      parser.advance()

      // varName
      name = parser.getToken()
      parser.advance()
      classTable.define(name, type, Symbol.KIND.VAR)
    }

    // ;
    parser.advance()
  }

  public function CompileStatements() {
    var command = parser.getToken()
    while (command == "let" || command == "if" || command == "while" || command == "do" || command == "return") {
      if (command == "let")
        CompileLet()
      if (command == "if")
        CompileIf()
      if (command == "while")
        CompileWhile()
      if (command == "do")
        CompileDo()
      if (command == "return")
        CompileReturn()
      command = parser.getToken()
    }
  }

  public function CompileLet() {
    var flag = false
    // let
    parser.advance()
    // varName
    name = parser.getToken()
    parser.advance()

    if (parser.getToken() == "[") {
      flag = true
      // [
      parser.advance()
      codeWriter.writePush(getSegment(classTable.KindOf(name)), classTable.IndexOf(name))
      CompileExpression()
      codeWriter.writeArithmetic(VMWriter.COMMAND.ADD)
      // ]
      parser.advance()
    }


    // =
    parser.advance()
    CompileExpression()

    if(flag){
      codeWriter.writePop(VMWriter.SEGMENT.TEMP, 0)
      codeWriter.writePop(VMWriter.SEGMENT.POINTER,1)
      codeWriter.writePush(VMWriter.SEGMENT.TEMP,0)
      codeWriter.writePop(VMWriter.SEGMENT.THAT,0)
    }
    else {
      codeWriter.writePop(getSegment(classTable.KindOf(name)), classTable.IndexOf(name))
    }
    // ;
    parser.advance()
  }

  public function CompileIf() {
    // if
    parser.advance()
    // (
    parser.advance()
    CompileExpression()
    // )
    parser.advance()

    // {
    parser.advance()
    CompileStatements()
    // }
    parser.advance()

    if (parser.getToken() == "else") {
      // else
      parser.advance()
      // {
      parser.advance()
      CompileStatements()
      // }
      parser.advance()
    }
  }

  //nati
  public function CompileWhile() {
    var continueLabel = newLabel()
    var topLabel = newLabel()
    codeWriter.writeLabel(topLabel)

    // while
    parser.advance()

    // (
    parser.advance()

    CompileExpression()

    // )
    parser.advance()
    codeWriter.writeArithmetic(VMWriter.COMMAND.NOT)
    codeWriter.writeIf(continueLabel)

    // {
    parser.advance()

    CompileStatements()

    // }
    parser.advance()
    //if (condition) go to top label
    codeWriter.writeGoto(topLabel)
    //or continue
    codeWriter.writeLabel(continueLabel)

  }
  //nati
  public function CompileDo() {
    // do
    parser.advance()

    CompileSubroutineCall()

    // ;
    parser.advance()
  }
  //nati
  public function CompileReturn() {
    // return
    parser.advance()

    if (parser.getToken() != ";")
    {
      CompileExpression()
    }
    else {
      codeWriter.writePush(VMWriter.SEGMENT.CONST, 0)
    }
    codeWriter.writeReturn()

    // ;
    parser.advance()
  }

  public function CompileExpression() {

    CompileTerm()

    while ("+-*/&|<>=".contains(parser.getToken())) {
      var command =parser.getToken()
      parser.advance()

      CompileTerm()

      codeWriter.writeArithmetic(getOp(command))
    }


  }

  public function CompileSubroutineCall(){
  // subroutineName | className | varName
    name = parser.getToken()
    parser.advance()

    var nargs = 0
    if (parser.getToken() == ".") {
      //.
      parser.advance()

      //subroutineName
      if (classTable.TypeOf(parser.getToken())=="") {  // method of another class
        name = name + "." + parser.getToken()

      }
      else{ // method of an instance of another class
        codeWriter.writePush(getSegment(classTable.KindOf(name)), classTable.IndexOf(name))
        nargs += 1

        name = classTable.TypeOf(name)+ "." + parser.getToken()
      }
      parser.advance()
    }
    else { // method of current class
      codeWriter.writePush(VMWriter.SEGMENT.POINTER,0)
      nargs =+ 1

      name = currentClass+"."+name
    }

    //(
    parser.advance()

    nargs += CompileExpressionList()

    codeWriter.writeCall(name,nargs)
    //)
    parser.advance()
  }

  public function CompileTerm() {
    var command = parser.getToken()
    var commandType = Tokenizer.findType(command)
    if("-~".contains(command)){
      parser.advance()
      CompileTerm()

      codeWriter.writeArithmetic(getUnOp(command))

    }
    else if(command == "("){
      parser.advance()

      CompileExpression()

      //)
      parser.advance()
    }
    else if(commandType == "integerConstant"){
     codeWriter.writePush(VMWriter.SEGMENT.CONST, Integer.parseInt(command))
      parser.advance()
    }
    else if(commandType == "stringConstant"){
      var strCommand = command.substring(1, command.length() - 1)
      codeWriter.writePush(VMWriter.SEGMENT.CONST, strCommand.length())
      codeWriter.writeCall("String.new", 1)
      for(c in strCommand.toCharArray()){
        codeWriter.writePush(VMWriter.SEGMENT.CONST, c)
        codeWriter.writeCall("String.appendChar",2)
      }


      parser.advance()
    }
    else if(commandType == "keyword"){
      if (command=="true"){
        codeWriter.writePush(VMWriter.SEGMENT.CONST, 0)
        codeWriter.writeArithmetic(VMWriter.COMMAND.NOT)
      }
      else if (command=="this"){
        codeWriter.writePush(VMWriter.SEGMENT.POINTER, 0)
      }
      else {  // command=="false" || command == "null"
        codeWriter.writePush(VMWriter.SEGMENT.CONST,0)
      }
      parser.advance()
    }
    else { //varName | classname | subrutineName
      var varName = parser.getToken()

      parser.advance()
      if (!".(".contains(parser.getToken())) { // just a varName and not a subroutineCall
        codeWriter.writePush(getSegment(classTable.KindOf(varName)), classTable.IndexOf(varName))

        if (parser.getToken() == "[") {
          parser.advance()

          CompileExpression()

          //base+offset
          codeWriter.writeArithmetic(VMWriter.COMMAND.ADD)

          codeWriter.writePop(VMWriter.SEGMENT.POINTER, 1)
          codeWriter.writePush(VMWriter.SEGMENT.THAT, 0)

          //]
          parser.advance()
        }
      }
      else {
        var nargs = 0
        if (parser.getToken() == ".") {
          //.
          parser.advance()

          //subroutineName
          if (classTable.TypeOf(parser.getToken())=="") {  // method of another class
            varName = varName + "." + parser.getToken()

          }
          else{ // method of an instance of another class
            codeWriter.writePush(getSegment(classTable.KindOf(varName)), classTable.IndexOf(varName))
            nargs += 1

            varName = classTable.TypeOf(varName)+ "." + parser.getToken()
          }
          parser.advance()
        }
        else { // method of current class
          codeWriter.writePush(VMWriter.SEGMENT.POINTER,0)
          nargs =+ 1

          varName = currentClass+"."+varName
        }

        //(
        parser.advance()

        nargs += CompileExpressionList()

        codeWriter.writeCall(varName,nargs)
        //)
        parser.advance()

      }
    }

  }

  public function CompileExpressionList():int {
    var nargs =0

    if(parser.getToken() != ")") {

      CompileExpression()

      nargs+=1

      while (parser.getToken() == ",") {
        // ,
        parser.advance()

        CompileExpression()
        nargs+=1
      }
    }

    return nargs
  }


  public function getSegment(_kind : Symbol.KIND): VMWriter.SEGMENT{
   var mySegment : VMWriter.SEGMENT
   switch (_kind){
     case Symbol.KIND.FIELD:
       mySegment = VMWriter.SEGMENT.THIS
       break
     case Symbol.KIND.STATIC:
       mySegment = VMWriter.SEGMENT.STATIC
       break
     case Symbol.KIND.VAR:
       mySegment = VMWriter.SEGMENT.LOCAL
       break
     case Symbol.KIND.ARG:
       mySegment = VMWriter.SEGMENT.ARG
       break
     default:
       mySegment = VMWriter.SEGMENT.NONE
   }
   return mySegment
 }

  public function getOp(opSign: String):VMWriter.COMMAND{
    var opCommand : VMWriter.COMMAND
    switch (opSign){
      case "+":
        opCommand = VMWriter.COMMAND.ADD
        break
      case "-":
        opCommand = VMWriter.COMMAND.SUB
        break
      case "*":
        opCommand = VMWriter.COMMAND.MULT
        break
      case "/":
        opCommand = VMWriter.COMMAND.DIV
        break
      case ">":
        opCommand = VMWriter.COMMAND.GT
        break
      case "<":
        opCommand = VMWriter.COMMAND.LT
        break
      case "=":
        opCommand = VMWriter.COMMAND.EQ
        break
      case "&":
        opCommand = VMWriter.COMMAND.AND
        break
      case "|":
        opCommand = VMWriter.COMMAND.OR

      }
    return opCommand
  }

  public function getUnOp(opSign: String):VMWriter.COMMAND{
    var opCommand : VMWriter.COMMAND
    switch (opSign){
      case "-":
        opCommand = VMWriter.COMMAND.NEG
        break
      case "~":
        opCommand = VMWriter.COMMAND.NOT

    }
    return opCommand
  }

 public static function newLabel(): String{
   var  ret = "LABEL_" + (labelIndex)
   labelIndex += 1
   return ret
  }
}
