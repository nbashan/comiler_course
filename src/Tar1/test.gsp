
var main_folder = "sources_for_assignment_1\\nand2tetris\\projects\\08\\"

var files_list = {"FunctionCalls\\FibonacciElement", "FunctionCalls\\NestedCall","FunctionCalls\\StaticsTest", //these files need the boot strap
                  "FunctionCalls\\SimpleFunction", "ProgramFlow\\BasicLoop","ProgramFlow\\FibonacciSeries"} //these files don't have a sys.init function

for (file in files_list) {
  var path = main_folder + "\\" + file


  var folder_list = path.split("\\\\")
  Main.translateVmFile(path, path + "\\" + folder_list[folder_list.length - 1] + ".asm")
}
//Main.translateVmFile("src\\files\\test_file",    "src\\files\\test_file\\TestFile.asm")