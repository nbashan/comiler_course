package Tar1

uses java.io.BufferedReader
uses java.io.FileReader


//Handles the parsing of a single .vm file
//Reads a VM command parses the command into its lexical components
//and provides convinent access to these components
//Ignores all white spaces, and comments
public class Parser {
  public static var _curerent_command :String as curerent_command
  public static var _reader : BufferedReader as reader


  //opens the input file/stream and gets ready to parse it
  public construct(inputFile :String){
    var file_read=new FileReader(inputFile)
    reader=new BufferedReader(file_read)
    Tools.inputFile = inputFile.split("\\.")[0]
  }



  //reads the next command from the input and makes it
  //the current command.
  //Should be called only if hasMoreCommands is true.
  //Initialy there is no current command
  public function advance(): boolean{
    curerent_command = reader.readLine()
    return curerent_command != null
  }

  //returns the command type of the current command
  public function getCommand(): String {
    return  curerent_command
  }

  public function getCommandType(): Constants.CommandType{
    var commandType = getCommand().split(" ")[0]
    if(Tools.arithmetic[commandType] != null){
      return C_ARITHMETIC
    }
    if(commandType == "push" or commandType == "pop"){
      return C_PUSH_POP
    }
    return null
  }

  //returns the first argument of the current command
  //in the case of C_ARRITHMETIC the command itself is returned
  //should not be called if the command is C_RETURN
  public function arg1():String{
    return null
  }

  //returns the second argument of the current command
  //should be called only if the current command is:
  //C_PUSH, C_POP, C_FUNCTION, C_CALL
  public function arg2():int{
    return 0
  }

  function closeFile() : void {
    reader.close()
  }
}

