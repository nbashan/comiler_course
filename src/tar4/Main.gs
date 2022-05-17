package tar4

uses java.io.File

public class Main {
  //public static var _inputFile: String as inputFile = ""

  public static function parserClass(path: String, outputFile: String){

    var d = new File(path)
    var file_list = Arrays.asList(d.list())
    var codeWriter = new CodeWriter(outputFile)


    foreach(inputFile in file_list) {
      var file_name = inputFile.split("\\.")

      if(file_name[1] == "jack"){
        var parser = new Parser(path+"\\"+inputFile)

        codeWriter.writeTag("class", true)

        //<keyword> class </keyword>
        parser.advance()
        var command = parser.getToken()
        codeWriter.writeToken(command,"keyword")

        //<identifier> Square </identifier>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "identifier")

        //<symbol> { </symbol>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")


        ParseClassVarDec()

        ParseSubDec()

        //<symbol> } </symbol>
        parser.advance()
        command = parser.getToken()
        codeWriter.writeToken(command, "symbol")

        codeWriter.writeTag("class", false)




        }
        parser.closeFile()
      }
    }
    codeWriter.closeFile()
  }
}


