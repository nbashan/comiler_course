package tar4

uses Tar1.Tools

uses java.io.BufferedWriter
uses java.io.FileWriter

//generates assembly code from the parsed VM command
public class CodeWriter {
  public var _writer: BufferedWriter as writer
  public var _writerT: BufferedWriter as writerT

  public static var _eqCounter:int as eqCounter = 0
  public static var _gtICounter:int as gtCounter = 0
  public static var _ltCounter:int as ltCounter = 0
  public static var _callCounter:int as callCounter = 0

  //opens the output file and gets ready to write into it
  public construct(outputFile: String){
    var class_write = new FileWriter(outputFile+".xml")
    var tokens_write = new FileWriter(outputFile+"T.xml")
    writer = new BufferedWriter(class_write)
    writerT = new BufferedWriter(tokens_write)

    writerT.write("<tokens>")
    writerT.newLine()
  }


  public function writeTag(tag: String,open: Boolean){

    var fullTag =""

    if (open)
      fullTag = "<"+tag+">"
    else
      fullTag = "</"+tag+">"

    writer.write(fullTag)
    writer.newLine()
  }

  public function writeToken(token: String, type: String){

    var fullToken = "<"+type+"> "+token+" </"+type+">"


    writer.write(fullToken)
    writer.newLine()

    writerT.write(fullToken)
    writerT.newLine()
  }

  function closeFile() : void {

    writer.close()

    writerT.write("</tokens>")
    writerT.close()
  }
}