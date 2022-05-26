package Tar5

uses java.io.BufferedWriter
uses java.io.FileWriter

class VMWriter {
  public var _writer: BufferedWriter as writer
  static enum SEGMENT {CONST,ARG,LOCAL,STATIC,THIS,THAT,POINTER,TEMP,NONE}
  static enum COMMAND {ADD,SUB,NEG,EQ,GT,LT,AND,OR,NOT,MULT,DIV}

  public construct(outputFile: String){
    var file_write = new FileWriter(outputFile)
    writer = new BufferedWriter(file_write)
  }
  public static var segmentStringHashMap:HashMap<SEGMENT,String> = {
      SEGMENT.CONST -> "constant",
      (SEGMENT.ARG)->"argument",
      (SEGMENT.LOCAL)->"local",
      (SEGMENT.STATIC)->"static",
      (SEGMENT.THIS)->"this",
      (SEGMENT.THAT)->"that",
      (SEGMENT.POINTER)->"pointer",
      (SEGMENT.TEMP)->"temp"
  }

  public static var commandStringHashMap:HashMap<COMMAND,String> = {
      (COMMAND.ADD) -> "add",
      (COMMAND.SUB) -> "sub",
      (COMMAND.NEG) -> "neg",
      (COMMAND.EQ) -> "eq",
      (COMMAND.GT) -> "gt",
      (COMMAND.LT) -> "lt",
      (COMMAND.AND) -> "and",
      (COMMAND.OR) -> "or",
      (COMMAND.NOT) -> "not",
      (COMMAND.MULT)-> "call Math.multiply 2",
      (COMMAND.DIV) -> "call Math.divide 2"

  }

  public function writePush(segment: SEGMENT, index: int){
    writer.write("push " +segmentStringHashMap[segment] +" "+ index as String)
  }
  public function writePop(segment: SEGMENT, index: int){
    writer.write("pop " +segmentStringHashMap[segment] +" "+ index as String)
  }
  public function writeArithmetic(command: COMMAND){
    writer.write(commandStringHashMap[command])
  }
  public function writeLabel(label: String){
    writer.write("label " + label)
  }
  public function writeGoto(label: String){
    writer.write("goto " + label)
  }
  public function writeIf(label: String){
    writer.write("if-goto " + label)
  }
  public function writeCall(name:String, nargs: int){
    writer.write("call " + name + " " + nargs as String)
  }
  public function writeFunction(name:String, nargs: int){
    writer.write("function " + name + " " + nargs as String)
  }
  public function writeReturn(){
    writer.write("return")
  }
  function closeFile() : void {
    writer.close()
  }
}