package tar4

uses Tar1.Tools

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


  public function writeTag(tag: String,open: Boolean){

    var fullTag =""

    if (open)
      fullTag = "<"+tag+">"
    else
      fullTag = "</"+tag+">"

    writer.write(fullTag)
  }

  public function writeToken(token: String, type: String){

    var fullToken = "<"+type+"> "+token+" </"+type+">"


    writer.write(fullToken)
  }

  function closeFile() : void {
    writer.close()
  }
}