package Tar5

uses Tar1.CodeWriter

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
      codeWriter.writePush(getKind(classTable.KindOf(name)), classTable.IndexOf(name))
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
      codeWriter.writePop(getKind(classTable.KindOf(name)), classTable.IndexOf(name))
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
      codeWriter.writePush(VMWriter.SEGMENT.CONST, 0)
    }
    else {
      CompileExpression()
    }
    codeWriter.writeReturn()

    // ;
    parser.advance()
  }

  public function CompileExpression() {
  }

  public function CompileSubroutineCall(){

  }

  public function CompileTerm() {
  }

  public function CompileExpressionList() {
  }


 public function getKind(_kind: Symbol.KIND):VMWriter.SEGMENT{
   var mySegment : VMWriter.SEGMENT
   switch (_kind){
     case Symbol.KIND.FIELD:
       mySegment = VMWriter.SEGMENT.THIS
     case Symbol.KIND.STATIC:
       mySegment = VMWriter.SEGMENT.STATIC
     case Symbol.KIND.VAR:
       mySegment = VMWriter.SEGMENT.LOCAL
     case Symbol.KIND.ARG:
       mySegment = VMWriter.SEGMENT.ARG
     default:
       mySegment = VMWriter.SEGMENT.NONE
   }
   return mySegment
 }

 public static function newLabel(): String{
   var  ret = "LABEL_" + (labelIndex)
   labelIndex += 1
   return ret
  }
}
