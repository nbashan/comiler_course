package Tar1

uses java.io.BufferedWriter
uses java.io.FileWriter

//generates assembly code from the parsed VM command
public class CodeWriter {
  public var _writer: BufferedWriter as writer

  public static var _eqCounter:int as eqCounter = 0
  public static var _gtICounter:int as gtCounter = 0
  public static var _ltCounter:int as ltCounter = 0

  //opens the output file and gets ready to write into it
  public construct(outputFile: String){
    var file_write = new FileWriter(outputFile)
    writer = new BufferedWriter(file_write)
  }

  //writes to the output file the assembyly code that implements
  //the given command
  public function writeArithmetic(command: String){
    var commandAsm = Tools.arithmetic[command] as String
    switch (command){
      case "eq":
        commandAsm = commandAsm.replace('{index}', "${eqCounter}")
        eqCounter += 1
        break
      case "gt":
        commandAsm = commandAsm.replace('{index}', "${gtCounter}")
        gtCounter += 1
        break
      case "lt":
        commandAsm = commandAsm.replace('{index}', "${ltCounter}")
        ltCounter += 1
        break
    }
    writer.write(commandAsm)
  }

  //writes to the output file the assembly code
  //that implements the given command
  //where command is either C_PUSH or C_POP
  public function writePushPop(command: String){
    var command_splitted = command.split(' ')

    var number = command_splitted[2]
    var area = Tools.segment[command_splitted[1]] as String

    var short_command = command_splitted[0] +" "+ command_splitted[1]
    var asmCommand= Tools.push_pop[short_command] as String

    if(command_splitted[1] == "pointer"){
      asmCommand = Tools.push_pop[command_splitted[0] + " static"] as String
      number = Tools.pointer[number] as String
    }
    if(area != null){
      short_command = command_splitted[0] + " segment"
      asmCommand= Tools.push_pop[short_command] as String
      asmCommand = asmCommand.replace("area", area)
    }
    if(command_splitted[1] == "temp"){
      var num = Integer.parseInt(number) + 5
      number = "${num}"
    }
    if(command_splitted[1] == "static") {
      number = Tools.inputFile + '.' +  number
    }

    asmCommand = asmCommand.replace("{number}", number)
    writer.write(asmCommand)
  }

  //closes the output file
  public function close(){}

  function closeFile() : void {
    writer.close()
  }
}