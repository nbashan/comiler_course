package tar4

uses Tar1.Tools

uses java.io.BufferedReader
uses java.io.File
uses java.io.FileReader
uses java.nio.charset.StandardCharsets
uses java.nio.file.Files
uses java.util.regex.Matcher
uses java.util.regex.Pattern





//Handles the parsing of a single .vm file
//Reads a VM command parses the command into its lexical components
//and provides convinent access to these components
//Ignores all white spaces, and comments
public class Parser {
  public static var _curerent_command :String as curerent_command
  public static var _reader : BufferedReader as reader
  public static var _matched : Matcher as matched
  public static var current_line : String

  private static var keywordReg =
      'class|constructor|function|method|field|static|' +
      'var|int|char|boolean|' +
      'void|true|false|null|this|' +
      'let|do|if|else|while|return'
  private static var symbolReg = '[\\&\\*\\+\\(\\)\\.\\/\\,\\-\\]\\;\\~\\}\\|\\{\\>\\=\\[\\<]'
  private static var intReg = '[0-9]+'
  private static var strReg = '"[^"]*"'
  private static var idReg = '[a-zA-Z_][\\w]*'
  private static var commentReg ="//[^\n]*\n|\\/\\*\\*"
  private static var allReg = commentReg+'|'+symbolReg+'|'+intReg+'|'+strReg +'|'+idReg
  private static var endComReg = "\\*\\/"
  private static var endPat = Pattern.compile(endComReg)
  private static var endmat:Matcher
  private static var regPattern:Pattern
  var content:String


  //opens the input file/stream and gets ready to parse it
  public construct(inputFile :String){
    content = new Scanner(new File(inputFile)).useDelimiter("\\Z").next().replace("\r\n","\n")
    //var file_read=new FileReader(inputFile)
    //reader=new BufferedReader(file_read)
    regPattern =Pattern.compile(allReg)
    //matched= regPattern.matcher(reader.readLine())
    matched= regPattern.matcher(content)
    Tools.inputFile = inputFile.split("\\.")[0]
    endmat = endPat.matcher(content)

  }



  //reads the next command from the input and makes it
  //the current command.
  //Should be called only if hasMoreCommands is true.
  //Initialy there is no current command
  public function advance(): boolean{
    var found = matched.find()
    //var a = matched.group()
   // while (true){
    while (!found || matched.group().startsWith("//")||matched.group().startsWith("/**")) {
      if (!found)
        return false
      //a = matched.group()
      if (matched.group().startsWith("/**")) {
        endmat.find(matched.end())
        found=matched.find(endmat.end())
      }
      else
        found = matched.find()


    }


    return true

  }


  public function getToken(): String {
    var token = matched.group();
    return token;
    //return  curerent_command
  }

  function closeFile() : void {
    //reader.close()
  }

  static function findType(command : String) : String {
    if (Pattern.matches(keywordReg,command))
       return "keyWord"
    if (Pattern.matches(symbolReg,command))
      return "symbol"
    if (Pattern.matches(intReg,command))
      return "integerConstant"
    if (Pattern.matches(strReg,command))
      return "integerConstant"
    return "identifier"

  }
}

