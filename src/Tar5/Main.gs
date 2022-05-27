package Tar5
uses java.io.File



public class Main {
  public static var parser : Tokenizer
  public static var codeWriter : VMWriter

  public static function main(path : String) {

    var files = new File(path)
    var file_list = Arrays.asList(files.list())


    foreach (inputFile in file_list) {
      var file_name = inputFile.split("\\.")

      if (file_name[1] == "jack") {
        var compileJack = new CompilationEngine(path+"\\"+inputFile,path+"\\"+file_name[0]+".vm")
        compileJack.CompileClass()
        compileJack.close_engine()


      }
    }
  }
}