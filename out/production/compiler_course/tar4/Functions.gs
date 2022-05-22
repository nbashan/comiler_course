package tar4

class Functions {
  public static function ParseClass(){

  }
  public static function ParseClassVarDec(){}
  public static function Parsetype(){}
  public static function ParseSubroutineDec(){}
  public static function ParseParameterList(){}
  public static function ParseSubroutineBody(){}
  public static function ParseVarDec(){}


ParseClassVarDec()
    {
    while (CheckNextToken() contain 'static' or 'field')
    {
    write "<classVarDec>"
    write getNextToken() //<keyword> field or static </keyword>
    write getNextToken()//<keyword> int </keyword>
    write getNextToken() //<identifier> x </identifier>
    while (CheckNextToken() contain comma,)
    {
    write getNextToken() // <symbol> , </symbol>
    write getNextToken() // <identifier> y </identifier>
    }
    write getNextToken() // <symbol> ; </symbol>
    write "</classVarDec>"
    }
    }

}
        }