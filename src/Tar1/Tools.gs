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

          "push constant" -> "@{constant}\n"+
                            "D = A\n"+
                            //CommonGround: (push D)
                            "@0\n"+
                            "A = M\n"+
                            "M = D\n"+
                            "@0\n"+
                            "M = M+1\n",
          //there is no pop constant

          "push static" -> "@({pointer})\n"+ //same for this, that, and static
                          "D = M\n"+
                          //CommonGround: (push D)
                          "@0\n"+
                          "A = M\n"+
                          "M = D\n"+
                          "@0\n"+
                          "M = M+1\n",

          "pop static" -> "@0\n"+		//get the value of the stack top
                          "M=M-1\n"+ //decrement the stack top pointer (pop)
                          "A=M\n"+  // A equals the address of the top of the stack
                          "D=M\n"+ // D equals stack top value
                          //popped
                          "@{pointer}\n"+
                          "M=D\n",

          "push temp" -> "@({5+index})\n"+ // when should we calculate this??
                        "D = M\n"+
                        //CommonGround: (push D)
                        "@0\n"+
                        "A = M\n"+
                        "M = D\n"+
                        "@0\n"+
                        "M = M+1\n",

          "pop temp" -> "@0\n"+		//get the value of the stack top
                        "M=M-1\n"+ //decrement the stack top pointer (pop)
                        "A=M\n"+  // A equals the address of the top of the stack
                        "D=M\n"+ // D equals stack top value
                        //popped
                        "@{5+index}\n"+		// when should we calculate this??
                        "M=D\n",


          "push segment" ->"@{area}\n"+
                            "D=M\n"+
                            "@{index}\n"+
                            "A=D+M\n"+
                            "D=M\n"+
                            //CommonGround: (push D)
                            "@0\n"+
                            "A = M\n"+
                            "M = D\n"+
                            "@0\n"+
                            "M = M+1\n",

          // we cannot pop in the beginnings, because we need D for the rest of the calculation
          "pop segment" ->"@{area}\n"+
                          "D=M\n"+ // D = address of {area}
                          "@{index}\n"+ // A = {index}
                          "D=D+A\n"+ // now D points at the target "{area} {index}"

                          "@0\n"+ // A=0
                          "M=M-1\n"+ // SP=SP-1
                          "A=M\n"+ // A=STACK[SP]

                          //now we swithch between A and D
                          "A=A+D\n"+
                          "D=A-D\n"+
                          "A=A-D\n"+ // D=STACK[SP], A=address of {area} {index}

                          "M=D\n"


          /*
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

           */
      }
}