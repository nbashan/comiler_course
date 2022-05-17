package tar4

class Tokens {
  construct (file: String) {
    var compiledRegex = compile(allRegex);
    var matched =compiledRegex.match(file)

  }



  public static function get_token(String f){
    if (matched.find()){
      var token = matched.group();
      return token;
    }



    var keyword = f.find();
    f.match()
    return keyword;
  }
  public static function get_symbole(String f,String nameOffunctioncall){
    var keyword = f.find();
    if keyword == ''
      return Null
    f.group()
    return nameOf;
  }




}