package Tar1

uses java.io.BufferedWriter
uses java.io.FileWriter

//generates assembly code from the parsed VM command
public class CodeWriter {
  public var _writer: BufferedWriter as writer

  //opens the output file and gets ready to write into it
  public construct(outputFile: String){
    var file_write = new FileWriter(outputFile)
    writer = new BufferedWriter(file_write)
  }

  //writes to the output file the assembyly code that implements
  //the given command
  public function writeArithmetic(command: String){
    writer.write(Tools.arithmetic[command] as String)
  }

  //writes to the output file the assembly code
  //that implements the given command
  //where command is either C_PUSH or C_POP
  public function writePushPop(command: Constants.CommandType, segment: String, index: int){

  }

  //closes the output file
  public function close(){}

  function closeFile() : void {
    writer.close()
  }
}