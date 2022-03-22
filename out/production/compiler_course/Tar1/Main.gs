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
    while(parser.advance()){
      var commandType = parser.getCommandType()
      switch (commandType){
        case C_NO_PARAMETERS:
          codeWriter.writeNoParameters(parser.getCommand())
          break
        case C_ONE_PAREMETER:
          codeWriter.writeOneParameter(parser.getCommand())
          break
        case C_TWO_PATAMETERS:
          codeWriter.writeTwoParameters(parser.getCommand())
          break
        case C_PUSH_POP:
          codeWriter.writePushPop(parser.getCommand())
          default:

      }
    }
    parser.closeFile()
    codeWriter.closeFile()
  }
}