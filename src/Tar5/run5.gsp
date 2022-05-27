uses java.io.File

var main_folder = "sources_for_assignment_1\\nand2tetris\\projects\\11\\"

var folder_content = new File(main_folder).listFiles()
for (file in folder_content)
  if (file.Directory)
    Main.main(file.toString())


