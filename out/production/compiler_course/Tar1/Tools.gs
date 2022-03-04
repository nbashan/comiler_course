package Tar1

class Tools {
  public static var _arithmetic :HashMap as arithmetic  =
      {
          "add" ->
"@0 \
M=M-1 \
A=M  \
D=M \
@0 \
M=M-1 \
A=M \
M=D+M \
M=M+1\n",
          "sub" -> "sub",
          "neg" -> "neg",
          "eq" -> "eq",
          "gt" -> "gt",
          "lt" -> "lt",
          "and" -> "and",
          "or" ->"or",
          "not" -> "not"
      }
  public static var _push_pop :HashMap as push_pop =
      {
          "push segment" -> "",
          "push this" -> "",
          "push that" -> "",
          "push temp" -> "",
          "push static" -> "",
          "pop segment" -> "",
          "pop this" -> "",
          "pop that" -> "",
          "pop temp" -> "",
          "pop static" -> ""
      }
}