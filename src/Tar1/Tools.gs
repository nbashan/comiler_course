package Tar1

class Tools {
  public static var _arithmetic :HashMap as arithmetic  =
      {
          "add" ->"@0\n"+
                "M=M-1\n"+
                "A=M\n"+
                "D=M\n"+
                "@0\n"+
                "M=M-1\n"+
                "A=M\n"+
                "M=D+M\n"+
                "M=M+1\n",
          "sub" ->"@0\n"+
                "M=M-1\n"+
                "A=M\n"+
                "D=M\n"+
                "@0\n"+
                "M=M-1\n"+
                "A=M\n"+
                "M=D-M\n"+ //this line is the only defference between add and sub
                "M=M+1\n",
          "neg" -> "@0\n"+
                  "A=M-1\n"+ // A= SP
                  "M=-M\n",
          "eq" -> "@0\n"+
              "M=M-1\n"+
              "A= M\n"+ // A= SP
              "D=M\n"+ // D=STACK[SP]
              "@0\n"+
              "A=M-1\n"+ // A=SP-1
              "D=D-M\n"+ //D=D-STACK[SP-1]
              "@IF_TRUE\n"+
              "D;JEQ\n"+
              "@0\n"+
              "A=M-1\n"+
              "M=0\n"+
              "@IF_FALSE\n"+
              "0;JMP\n"+
              "(IF_TRUE)\n"+
              "@0\n"+
              "A=M-1\n"+
              "M=-1\n"+
              "(IF_FALSE)\n",
          "gt" -> "@0\n"+
                "M=M-1\n"+
                "A= M\n"+ // A= SP
                "D=M\n"+ // D=STACK[SP]
                "@0\n"+
                "A=M-1\n"+ // A=SP-1
                "D=D-M\n"+ //D=D-STACK[SP-1]
                "@IF_TRUE\n"+
                "D;JLT\n"+ //this line is the only defference between gt and lt
                "@0\n"+
                "A=M-1\n"+
                "M=0\n"+
                "@IF_FALSE\n"+
                "0;JMP\n"+
                "(IF_TRUE)\n"+
                "@0\n"+
                "A=M-1\n"+
                "M=-1\n"+
                "(IF_FALSE)\n",
          "lt" -> "@0\n"+
                  "M=M-1\n"+
                  "A= M\n"+ // A= SP
                  "D=M\n"+ // D=STACK[SP]
                  "@0\n"+
                  "A=M-1\n"+ // A=SP-1
                  "D=D-M\n"+ //D=D-STACK[SP-1]
                  "@IF_TRUE\n"+
                  "D;JGT\n"+
                  "@0\n"+
                  "A=M-1\n"+
                  "M=0\n"+
                  "@IF_FALSE\n"+
                  "0;JMP\n"+
                  "(IF_TRUE)\n"+
                  "@0\n"+
                  "A=M-1\n"+
                  "M=-1\n"+
                  "(IF_FALSE)\n",
          "and" -> "@0\n"+
                    "M=M-1\n"+
                    "A=M\n"+ // A= SP
                    "D=M\n"+ // D=STACK[SP]
                    "A=A-1\n"+
                    "M=D&M\n",
          "or" ->"@0\n"+
                  "M=M-1\n"+
                  "A=M\n"+ // A= SP
                  "D=M\n"+ // D=STACK[SP]
                  "A=A-1\n"+
                  "M=D|M\n", //this line is the only defference between "and" and "or
          "not" -> "@0\n"+
                  "A=M-1\n"+
                  "M=!M\n"
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