package Tar1
//input fileName.vm
//output fileName.asm


//LOGIC:
//Constructs a parser - handling INPUT file
//Constructs a CodeWriter - handling OUTPUT file
//Marchest through the input file, parsing each line and generating code from it
public class Main {

  public static function translateVmFile(inputFile: String, outputFile: String){
    var parser = new Parser(inputFile)
    var codeWriter = new CodeWriter(outputFile)
    while(parser.hasMoreCommands()){
      var commandType = parser.getCommandType()
      switch (commandType) {
        case Constants.CommandType.C_ARITHMETIC:
          codeWriter.writeArithmetic(parser.curerent_command)
          break
        case Constants.CommandType.C_PUSH:
          codeWriter.writePushPop(commandType, parser.arg1(), parser.arg2())
          break
        case Constants.CommandType.C_POP:
          codeWriter.writePushPop(commandType, parser.arg1(), parser.arg2())
          break
      }

    }
  }
}