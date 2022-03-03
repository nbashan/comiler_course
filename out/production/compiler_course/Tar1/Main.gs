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
      var type = parser.getCommandType()

    }
  }
}