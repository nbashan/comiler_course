uses gw.util.GosuStringUtil
uses java.io.*


//  VARIABLES
var path = "src//Tar0"

var d = new File(path)
var file_list = d.list()

var file_write=new FileWriter(path + "//Tar0.asm")
var writer=new BufferedWriter(file_write)

var total_buy =0.0
var total_cell = 0.0


// LOOP OVER FILE LIST
for(var fname in file_list){
  var file_name = fname.split("\\.")

  if(file_name[1] == "vm") {
    var currentFile = path + '\\' + file_name[0] + ".vm"
    var f2 = new File(currentFile)

    using (var scanner = new Scanner(new BufferedReader(new FileReader(currentFile)))) {
      // LOOP OVER VM FILE
      while (scanner.hasNext()) {
        var line = scanner.nextLine().split(" ")

        if (line[0] == "buy") {
          HandleBuy(line[1],Integer.valueOf(line[2]),Double.valueOf(line[3]))
        }
        else{
          HandleCell(line[1],Integer.valueOf(line[2]),Double.valueOf(line[3]))
        }
      }
    }
  }
}

writer.write("TOTAL BUY:${total_buy}\nTOTAL CELL:${total_cell}\n")
writer.close()

// FUNCTIONS

function HandleBuy(ProductName : String, Amount :int, Price : double){
  var temp_amout = Amount*Price
  total_buy += temp_amout
  writer.write("###BUY <${ProductName}>###\n${temp_amout}\n") // write to buffer
}

function HandleCell(ProductName : String, Amount :int, Price : double){
  var temp_amout = Amount*Price
  total_cell += temp_amout
  writer.write("$$$CELL <${ProductName}>$$$\n${temp_amout}\n") // write to buffer
}





