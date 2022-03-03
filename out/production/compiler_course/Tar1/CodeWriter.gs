package Tar1

//generates assembly code from the parsed VM command
public class CodeWriter {

  //opens the output file and gets ready to write into it
  public construct(outputFile: String){

  }

  //writes to the output file the assembyly code that implements
  //the given command
  public function writeArithmetic(command: Constants.CommandType){

  }

  //writes to the output file the assembly code
  //that implements the given command
  //where command is either C_PUSH or C_POP
  public function writePushPop(command: Constants.CommandType, segment: String, index: int){

  }

  //closes the output file
  public function close(){}

}