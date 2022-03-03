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

  //#########   ARITHMETIC FUNCTIONS   #########
  public static var _ADD :String as Add = ""
  public static var _SUB :String as SUB = ""
  public static var _NEG :String as NEG = ""
  public static var _EQ :String as EQ = ""
  public static var _GT :String as GT = ""
  public static var _LT :String as LT = ""
  public static var _AND :String as AND = ""
  public static var _OR :String as OR = ""
  public static var _NOT :String as NOT = ""

  //#########   PUSH POP ARGUMENT   #########
  public static var _PUSH_ARGUMENT:String as PUSH_ARGUMENT= ""
  public static var _POP_ARGUMENT :String as POP_ARGUMENT= ""

  //#########   PUSH POP LOCAL   #########
  public static var _PUSH_LOCAL :String as PUSH_LOCAL = ""
  public static var _POP_LOCAL :String as POP_LOCAL = ""

  //#########   PUSH POP STATIC   #########
  public static var _PUSH_STATIC :String as PUSH_STATIC= ""
  public static var _POP_STATIC :String as POP_STATIC= ""

  //#########   PUSH POP CONSTANT   #########
  public static var _PUSH_CONSTANT :String as PUSH_CONSTANT= ""
  public static var _POP_CONSTANT :String as POP_CONSTANT = ""

  //#########   PUSH POP THIS   #########
  public static var _PUSH_THIS :String as PUSH_THIS = ""
  public static var _POP_THIS :String as POP_THIS = ""

  //#########   PUSH POP THAT   #########
  public static var _PUSH_THAT :String as PUSH_THAT = ""
  public static var _POP_THAT :String as POP_THAT = ""

}