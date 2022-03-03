package Tar1



//Handles the parsing of a single .vm file
//Reads a VM command parses the command into its lexical components
//and provides convinent access to these components
//Ignores all white spaces, and comments
public class Parser {

  //opens the input file/stream and gets ready to parse it
  public construct(inputFile :String){

  }

  //are there more commands in the input
  public function hasMoreCommands(): boolean{
    return true
  }


  //reads the next command from the input and makes it
  //the current command.
  //Should be called only if hasMoreCommands is true.
  //Initialy there is no current command
  public function advance(){

  }

  //returns the command type of the current command
  //
  public function getCommandType(): Constants.CommandType {
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
}

