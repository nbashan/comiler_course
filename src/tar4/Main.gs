package tar4

uses java.io.File

public class Main {
  //public static var _inputFile: String as inputFile = ""
  public static var parser : Parser
  public static var codeWriter : CodeWriter
  public static var command : String


  // Program Structure ////

  public static function parserClass(path : String) {

    var d = new File(path)
    var file_list = Arrays.asList(d.list())


    foreach (inputFile in file_list) {
      var file_name = inputFile.split("\\.")

      if (file_name[1] == "jack") {
        parser = new Parser(path + "\\" + inputFile)
        codeWriter = new CodeWriter(path + "\\" + file_name[0])

        codeWriter.writeTag("class", true)
        parser.advance()


        // class
        command = parser.getToken()
        codeWriter.writeToken(command, "keyword")
        parser.advance()

        // className
        command = parser.getToken()
        codeWriter.writeToken(command, "identifier")
        parser.advance()

        // {
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")
        parser.advance()

        while (parser.getToken() == "static" || parser.getToken() == "field")
          ParseClassVarDec()

        while (parser.getToken() == "constructor" || parser.getToken() == "function" || parser.getToken() == "method")
          ParseSubDec()

        // }
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")

        codeWriter.writeTag("class", false)
        parser.closeFile()

      }
    }
    codeWriter.closeFile()
  }

  public static function ParseClassVarDec() {
    codeWriter.writeTag("classVarDec", true)

    // static | field
    command = parser.getToken()
    codeWriter.writeToken(command, "keyword")
    parser.advance()

    // type -could be an identifier
    command = parser.getToken()
    codeWriter.writeToken(command, Parser.findType(command))
    parser.advance()

    // varName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()


    while (parser.getToken() == ",") {
      // ,
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      // varName
      command = parser.getToken()
      codeWriter.writeToken(command, "identifier")
      parser.advance()
    }

    // ;
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    codeWriter.writeTag("classVarDec", false)
  }

  private static function ParseSubDec() {
    codeWriter.writeTag("subroutineDec", true)

    // consructor | function | method
    command = parser.getToken()
    codeWriter.writeToken(command, "keyword")
    parser.advance()

    // void | type -could be a keyword or an identifier
    command = parser.getToken()
    codeWriter.writeToken(command, Parser.findType(command))
    parser.advance()

    // subroutineName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    // (
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    if (parser.getToken() != ")")
      ParseParameterList()

    // )
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    ParseSubBody()

    codeWriter.writeTag("subroutineDec", false)
  }

  private static function ParseParameterList() : void {

    codeWriter.writeTag("parameterList", true)

    // type -could be a keyword or an identifier
    command = parser.getToken()
    codeWriter.writeToken(command, Parser.findType(command))
    parser.advance()

    // varName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    while (parser.getToken() == ",") {
      // ,
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      // type -could be a keyword or an identifier
      command = parser.getToken()
      codeWriter.writeToken(command, Parser.findType(command))
      parser.advance()

      // varName
      command = parser.getToken()
      codeWriter.writeToken(command, "identifier")
      parser.advance()
    }

    codeWriter.writeTag("parameterList", false)

  }

  private static function ParseSubBody() : void {

    codeWriter.writeTag("subroutineBody", true)

    // {
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    while (parser.getToken() == "var")
      ParseVarDec()

    ParseStatements()

    // {
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    codeWriter.writeTag("subroutineBody", false)
  }

  private static function ParseVarDec() : void {
    codeWriter.writeTag("varDec", true)

    // var
    command = parser.getToken()
    codeWriter.writeToken(command, "keyword")
    parser.advance()

    // type -could be a keyword or an identifier
    command = parser.getToken()
    codeWriter.writeToken(command, Parser.findType(command))
    parser.advance()

    // varName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    while (parser.getToken() == ",") {
      // ,
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      // varName
      command = parser.getToken()
      codeWriter.writeToken(command, "identifier")
      parser.advance()
    }

    // ;
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    codeWriter.writeTag("varDec", false)
  }


  // Statements ////

  public static function ParseStatements() {
    codeWriter.writeTag("statements", true)

    command = parser.getToken()

    while (command == "let" || command == "if" || command == "while" || command == "do" || command == "return")
      ParseStatement()

    codeWriter.writeTag("statements", false)
  }

  public static function ParseStatement() {
    codeWriter.writeTag("statement", true)

    command = parser.getToken()
    if (command == "let")
      ParseLetStatement()
    if (command == "if")
      ParseIfStatement()
    if (command == "while")
      ParseWhileStatement()
    if (command == "do")
      ParseDoStatement()
    if (command == "return")
      ParseReturnStatement()

    codeWriter.writeTag("statement", false)
  }

  public static function ParseLetStatement() {
    codeWriter.writeTag("letStatement", true)

    // let
    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    // varName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    if (parser.getToken() == "[") {

      // [
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      ParseExpression()

      // ]
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()


    }

    // =
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()


    // ;
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("letStatement", false)
  }


  public static function ParseIfStatement() {
    codeWriter.writeTag("ifStatement", true)

    // if
    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    // (
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()

    // )
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    // {
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseStatements()

    // }
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    if (parser.getToken() == "else") {

      // else
      command = parser.getToken()
      codeWriter.writeToken(command, "keyword")
      parser.advance()

      // {
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      ParseStatements()

      // }
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()
    }


    codeWriter.writeTag("ifStatement", false)
  }

  public static function ParseWhileStatement() {
    codeWriter.writeTag("whileStatement", true)


    // while
    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    // (
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()

    // )
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    // {
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseStatements()

    // }
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    codeWriter.writeTag("whileStatement", false)
  }

  public static function ParseDoStatement() {
    codeWriter.writeTag("doStatement", true)

    // do
    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    ParseSubroutineCall()

    // ;
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    codeWriter.writeTag("doStatement", false)
  }

  public static function ParseReturnStatement() {

    codeWriter.writeTag("returnStatement", true)

    // return
    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    if (parser.getToken() != ";")
      ParseExpression()

    // ;
    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("returnStatement", false)
  }

  // Expressions ////

  private static function ParseExpression() : void {
    codeWriter.writeTag("parseExpression", true)
    ParseTerm()

    command = parser.getToken()
    while ("+-*/&|<>=".contains(command)) {
      codeWriter.writeToken(command, "symbol")
      parser.advance()
      ParseTerm()
    }

    codeWriter.writeTag("parseExpression", false)
  }

  private static function ParseSubroutineCall() : void {
    codeWriter.writeTag("parseSubroutineCall", true)

    // subroutineName | className | varName
    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    command = parser.getToken()



    codeWriter.writeTag("parseSubroutineCall", false)
  }

  private static function ParseTerm() : void {
    codeWriter.writeTag("parseTerm", true)
    command = parser.getToken()
    var type = Parser.findType(command)
    if("-~".contains(command)){
      codeWriter.writeToken(command, "symbol")
      parser.advance()
      ParseTerm()
    }
    else if(command == "("){
      codeWriter.writeToken(command, "symbol")
      parser.advance()
      ParseExpressionList()
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()
    }
    else if(type == "integerConstant"){
      command = parser.getToken()
      codeWriter.writeToken(command, type)
      parser.advance()
    }
    else if(type == "stringConstant"){
      command = parser.getToken()
      codeWriter.writeToken(command, type)
      parser.advance()
    }
    else if(type == "keywordConstant"){
      command = parser.getToken()
      codeWriter.writeToken(command, type)
      parser.advance()
    }
    else {
      command = parser.getToken()
      codeWriter.writeToken(command, "identifier")
      parser.advance()
      command = parser.getToken()
      if (command == "[") {
        codeWriter.writeToken(command, "symbol")
        parser.advance()
        ParseExpressionList()
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")
        parser.advance()
      } else {
        if (command == ".") {
          //.
          command = parser.getToken()
          codeWriter.writeToken(command, "symbol")
          parser.advance()
          //subroutineName
          command = parser.getToken()
          codeWriter.writeToken(command, "identifier")
          parser.advance()

        }
        //(
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")
        parser.advance()
        ParseExpressionList()
        //)
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")
        parser.advance()
      }
    }
    codeWriter.writeTag("parseTerm", false)
  }


  private static function ParseExpressionList() : void {
    codeWriter.writeTag("parseExpressionList", true)

    if(parser.getToken() != ")") {
      ParseExpression()
      command = parser.getToken()
      while (parser.getToken() == ",") {
        // ,
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")
        parser.advance()
        ParseExpression()
      }
    }
    codeWriter.writeTag("parseExpressionList", false)
  }
}




