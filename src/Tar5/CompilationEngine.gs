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

  var path:String
  var parser:Tokenizer
  var codeWriter:VMWriter
  var classTable:SymbolTable
  var symbol:Symbol
  var name:String
  var type:String
  var kind:Symbol.KIND


  public construct(inputFile: String, outputFile: String){
    parser = new Tokenizer(inputFile)
    codeWriter = new VMWriter(outputFile)

  }
  public function CompileClass(){
    classTable =new SymbolTable()

    //codeWriter.writeTag("class", true)
    parser.advance()


    // class
    //command = parser.getToken()
    //codeWriter.writeToken(command, "keyword")
    parser.advance()

    // className
    //command = parser.getToken()
    //codeWriter.writeToken(command, "identifier")
    parser.advance()

    // {
    //command = parser.getToken()
    //codeWriter.writeToken(command, "symbol")
    parser.advance()

    while (parser.getToken() == "static" || parser.getToken() == "field")
      CompileClassVarDec()

    while (parser.getToken() == "constructor" || parser.getToken() == "function" || parser.getToken() == "method")
      CompileSubroutineDec()

    // }
    //command = parser.getToken()
    //codeWriter.writeToken(command, "symbol")
  }
  public function CompileClassVarDec(){
    //codeWriter.writeTag("classVarDec", true)

    // static | field
     kind= parser.getToken() ??????????
    //codeWriter.writeToken(command, "keyword")
    parser.advance()

    // type -could be an identifier
    type = parser.getToken()
    //codeWriter.writeToken(command, Parser.findType(command))
    parser.advance()

    // varName
    name = parser.getToken()
    //codeWriter.writeToken(command, "identifier")
    symbol = new  Symbol(name,type,kind,index)
    classTable.define(symbol)
    parser.advance()


    while (parser.getToken() == ",") {
      // ,
      //command = parser.getToken()
      //codeWriter.writeToken(command, "symbol")
      parser.advance()

      // varName
      name = parser.getToken()
      //codeWriter.writeToken(command, "identifier")
      symbol = new  Symbol(name,type,kind,index)
      classTable.define(symbol)
      parser.advance()
    }

    // ;
    //command = parser.getToken()
    //codeWriter.writeToken(command, "symbol")
    parser.advance()

    //codeWriter.writeTag("classVarDec", false)
  }
  public function CompileSubroutineDec(){

  }
  public function CompileParameterList(){}
  public function CompileSubroutineBody(){}
  public function CompileVarDec(){}
  public function CompileStatements(){}
  public function CompileLet(){}
  public function CompileIf(){}
  public function CompileWhile(){}
  public function CompileDo(){}
  public function CompileReturn(){}
  public function CompileExpression(){}
  public function CompileTerm(){}
  public function CompileExpressionList(){}
}