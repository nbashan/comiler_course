package Tar1

class Constants {
  public static enum CommandType {
    C_ARITHMETIC,//all arithmetic/logical commands
    C_PUSH,
    C_POP,
    C_LABEL,
    C_GOTO,
    C_IF,
    C_FUNCTION,
    C_RETURN,
    C_CALL
  }
  var _bar : String as Bar = "bar" // the 'as Bar' exposes this field as the property Bar


  public static var _ADD :String as Add = ""
  public static var _SUB :String as SUB = ""


}