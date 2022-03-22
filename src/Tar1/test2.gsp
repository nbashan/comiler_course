print("he")
var main_folder = "sources_for_assignment_1\\nand2tetris\\projects\\07\\"
var files_list = {"StackArithmetic\\SimpleAdd","StackArithmetic\\StackTest",
    "MemoryAccess\\BasicTest","MemoryAccess\\PointerTest","MemoryAccess\\StaticTest"}
for (file in files_list) {
  var file_name = main_folder + file + "\\" + file.split("\\\\")[1]
  Main.translateVmFile(file_name+".vm", file_name+".asm")
}