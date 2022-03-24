package Tar1

uses java.io.BufferedWriter
uses java.io.FileWriter

//generates assembly code from the parsed VM command
public class CodeWriter {
  public var _writer: BufferedWriter as writer

  public static var _eqCounter:int as eqCounter = 0
  public static var _gtICounter:int as gtCounter = 0
  public static var _ltCounter:int as ltCounter = 0
  public static var _callCounter:int as callCounter = 0

  //opens the output file and gets ready to write into it
  public construct(outputFile: String){
    var file_write = new FileWriter(outputFile)
    writer = new BufferedWriter(file_write)
  }

  //writes to the output file the assembyly code that implements
  //the given command
  public function writeNoParameters(command: String){
    var command_splitted = command.split(' ')
    var commandAsm = Tools.no_parameters[command_splitted[0]] as String
    switch (command_splitted[0]){
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

  public function writeOneParameter(command: String){
    var command_splitted = command.split(' ')
    var label = command_splitted[1]

    var asmCommand= Tools.one_parameter[command_splitted[0]] as String
    asmCommand = asmCommand.replace("label", label)

    //@TODO
    var file_list =Tools.inputFile.split('\\\\')
    asmCommand = asmCommand.replace("FileName",file_list[file_list.length-1])

    writer.write(asmCommand)
  }

  public function writeTwoParameters(command: String){
    var command_splitted = command.split(' ')
    var commandName = command_splitted[0]

    var asmCommand = Tools.two_parameter[commandName] as String
    var firstArgument =command_splitted[1]
    var secondArgument = command_splitted[2]

    if(commandName == "call"){
      secondArgument = "${Integer.parseInt(secondArgument) + 5}"
      asmCommand = asmCommand.replace('{index}', "${callCounter}")
      callCounter += 1

    }
    asmCommand = asmCommand.replace("firstParameter",firstArgument)
    asmCommand = asmCommand.replace("secondParameter",secondArgument)
    writer.write(asmCommand)
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
      asmCommand = asmCommand.replace("{area}", area)
    }
    if(command_splitted[1] == "temp"){
      var num = Integer.parseInt(number) + 5
      number = "${num}"
    }
    if(command_splitted[1] == "static") {
      var file_list =Tools.inputFile.split('\\\\')
      number = file_list[file_list.length-1] + '.' +  number
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