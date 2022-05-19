package tar4

uses java.io.File

public class Main {
  //public static var _inputFile: String as inputFile = ""
  public static var parser: Parser
  public static var codeWriter: CodeWriter
  public static var command: String

  public static function parserClass(path: String, outputFile: String){

    var d = new File(path)
    var file_list = Arrays.asList(d.list())
    codeWriter = new CodeWriter(outputFile)


    foreach(inputFile in file_list) {
      var file_name = inputFile.split("\\.")

      if(file_name[1] == "jack"){
        parser = new Parser(path+"\\"+inputFile)

        codeWriter.writeTag("class", true)

        //<keyword> class </keyword>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command,"keyword")

        //<identifier> Square </identifier>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "identifier")

        //<symbol> { </symbol>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")


       // ParseClassVarDec()

       // ParseSubDec()

        //<symbol> } </symbol>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")

        codeWriter.writeTag("class", false)

        parser.closeFile()




      }
    }
    codeWriter.closeFile()
  }
  public static function ParseReturnStatement(){

    codeWriter.writeTag("returnStatement", true)

    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    if (parser.getToken()!=";")
      ParseExpression()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("returnStatement", false)
  }

  public static function ParseDoStatement(){
    codeWriter.writeTag("doStatement", true)

    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    ParseSubroutineCall()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("doStatement", false)
  }

  public static function ParseWhileStatement(){
    codeWriter.writeTag("whileStatement", true)

    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseStatements()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("whileStatement", false)
  }

  public static function ParseIFStatement(){
    codeWriter.writeTag("ifStatement", true)

    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseStatements()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    if (parser.getToken()=="else"){
      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      ParseStatements()

      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()
    }


    codeWriter.writeTag("ifStatement", false)
  }

  public static function ParseLetStatement(){
    codeWriter.writeTag("letStatement", true)

    command = parser.getToken()
    codeWriter.writeToken(command, "keyWord")
    parser.advance()

    command = parser.getToken()
    codeWriter.writeToken(command, "identifier")
    parser.advance()

    if (parser.getToken() == "["){

      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()

      ParseExpression()

      command = parser.getToken()
      codeWriter.writeToken(command, "symbol")
      parser.advance()


    }

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()

    ParseExpression()

    command = parser.getToken()
    codeWriter.writeToken(command, "symbol")
    parser.advance()


    codeWriter.writeTag("letStatement", false)
  }

  public static function ParseStatement(){
    codeWriter.writeTag("statement", true)

    command = parser.getToken()
    if (command == "let")
      ParseLetStatement()
    if (command == "if")
      ParseIFStatement()
    if (command == "while")
      ParseWhileStatement()
    if (command == "do")
      ParseDoStatement()
    if (command == "return")
      ParseReturnStatement()

    codeWriter.writeTag("statement", false)
  }

  public static function ParseStatements(){
    codeWriter.writeTag("statements", true)

    command = parser.getToken()

    while (command == "let" || command == "if" || command == "while" || command == "do" || command == "return")
      ParseStatement()

    codeWriter.writeTag("statements", false)
  }



}




