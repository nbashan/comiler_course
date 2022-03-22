package Tar1

class Tools {
  public static enum CommandType {
    C_NO_PARAMETERS,//all arithmetic/logical commands
    C_ONE_PAREMETER,
    C_TWO_PATAMETERS,
    C_PUSH_POP
  }
  public static var _inputFile: String as inputFile = ""
  public static var _pointer : HashMap as pointer =
      {
          "0"->"THIS",
          "1"->"THAT"
      }




  public static var _no_parameters : HashMap as no_parameters =
      {
          "add" -> "@SP\n"+               //   A = 0
                   "AM=M-1\n"+            //   A = ram[0]-1, ram[0] = ram[0]-1
                    "D=M\n"+               //   D = ram[A]
                    "@SP\n"+               //   A = 0
                    "AM=M-1\n"+            //   A = ram[0]-1, ram[0] = ram[0]-1
                    "D=M+D\n"+            //   D = ram[A]+D
                    "M=D\n"+             //   ram[A] = D
                    "@SP\n"+               //   A = 0
                    "M=M+1\n",             //   ram[0] = ram[0]+1,
          "sub" -> "@SP\n"+               //   A = 0
              "AM=M-1\n"+            //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+               //   D = ram[A]
              "@SP\n"+               //   A = 0
              "AM=M-1\n"+            //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M-D\n"+            //   D = ram[A]+D
              "M=D\n"+             //   ram[A] = D
              "@SP\n"+               //   A = 0
              "M=M+1\n",             //   ram[0] = ram[0]+1,
          "neg" -> "@0\n" +
              "AM=M-1\n" + // A= SP
              "D=-M\n"+
              "M=D\n"+
                "@SP\n"+               //   A = 0
              "M=M+1\n",
          "eq" -> "@SP\n"+ //   A = 0
              "AM=M-1\n"+ //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+ //   D = ram[A]
              "@SP\n"+ //   A = 0
              "AM=M-1\n"+ //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M-D\n"+ //   D = ram[A]-D
              "@EQ.{index}_TRUE\n"+
              "D;JEQ\n"+ //   if D==0 jump to label of TRUE
              "@SP\n"+ //   A = 0
              "A=M\n"+ //   A = ram[0]
              "M=0\n"+ //   ram[A] = 0
              "@EQ.{index}_END\n"+
              "0;JMP\n"+ //   jump to label of END
              "(EQ.{index}_TRUE)\n"+
              "@SP\n"+ //   A = 0
              "A=M\n"+ //   A = ram[0]
              "M=-1\n"+ //   ram[A] = -1
              "(EQ.{index}_END)\n"+
              "@SP\n"+ //   A = 0
              "M=M+1\n", //   ram[0] = ram[0]+1



          "gt" ->"@SP\n"+//   A = 0
              "AM=M-1\n"+//   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+//   D = ram[A]
              "@SP\n"+//   A = 0
              "AM=M-1\n"+//   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M-D\n"+//   D = ram[A]-D
              "@GT.{index}_TRUE\n"+
              "D;JGT\n"+//   if D>0 jump to label of TRUE
              "@SP\n"+//   A = 0
              "A=M\n"+//   A = ram[0]
              "M=0\n"+//   ram[A] = 0
              "@GT.{index}_END\n"+
              "0;JMP\n"+//   jump to label of END
              "(GT.{index}_TRUE)\n"+
              "@SP\n"+//   A = 0
              "A=M\n"+//   A = ram[0]
              "M=-1\n"+//   ram[A] = -1
              "(GT.{index}_END)\n"+
              "@SP\n"+//   A = 0
              "M=M+1\n",//   ram[0] = ram[0]+1

          "lt" ->"@SP\n"+//   A = 0
              "AM=M-1\n"+//   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+//   D = ram[A]
              "@SP\n"+//   A = 0
              "AM=M-1\n"+//   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M-D\n"+//   D = ram[A]-D
              "@LT.{index}_TRUE\n"+
              "D;JLT\n"+//   if D<0 jump to label of TRUE
              "@SP\n"+//   A = 0
              "A=M\n"+//   A = ram[0]
              "M=0\n"+//   ram[A] = 0
              "@LT.{index}_END\n"+
              "0;JMP\n"+//   jump to label of END
              "(LT.{index}_TRUE)\n"+
              "@SP\n"+//   A = 0
              "A=M\n"+//   A = ram[0]
              "M=-1\n"+//   ram[A] = -1
              "(LT.{index}_END)\n"+
              "@SP\n"+//   A = 0
              "M=M+1\n",//   ram[0] = ram[0]+1


          "and" -> "@SP\n"+     //   A = 0
              "AM=M-1\n"+     //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+     //   D = ram[A]
              "@SP\n"+     //   A = 0
              "AM=M-1\n"+     //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=D&M\n"+     //   D = D&&ram[A]
              "M=D\n"+     //   ram[A] = D
              "@SP\n"+     //   A = 0
              "M=M+1\n",     //   ram[0] = ram[0]+1
          "or" ->"@SP\n"+    //   A = 0
              "AM=M-1\n"+    //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=M\n"+    //   D = ram[A]
              "@SP\n"+    //   A = 0
              "AM=M-1\n"+    //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=D|M\n"+    //   D = D||ram[A]
              "M=D\n"+    //   ram[A] = D
              "@SP\n"+    //   A = 0
              "M=M+1\n",    //   ram[0] = ram[0]+1


          "not" ->"@SP\n"+  //   A = 0
              "AM=M-1\n"+  //   A = ram[0]-1, ram[0] = ram[0]-1
              "D=!M\n"+  //   D = !ram[A]
              "M=D\n"+  //   ram[A] = D
              "@SP\n"+  //   A = 0
              "M=M+1\n",  //   ram[0] = ram[0]+1

          "return" ->
                  // FRAME = LCL
                  "@LCL\n"+
                  "D=M\n"+
                  // RET = * (FRAME-5)
                  // RAM[13] = (LOCAL - 5)
                  "@5\n"+
                  "A=D-A\n"+
                  "D=M\n"+
                  "@13\n"+
                  "M=D\n"+
                  // * ARG = pop()
                  "@SP\n"+
                  "M=M-1\n"+
                  "A=M\n"+
                  "D=M\n"+
                  "@ARG\n"+
                  "A=M\n"+
                  "M=D\n"+
                  // SP = ARG+1
                  "@ARG\n"+
                  "D=M\n"+
                  "@SP\n"+
                  "M=D+1\n"+

                  // THAT = *(FRAM-1)
                  "@LCL\n"+
                  "M=M-1\n"+
                  "A=M\n"+
                  "D=M\n"+
                  "@THAT\n"+
                  "M=D\n"+

                  // THIS = *(FRAM-2)
                  "@LCL\n"+
                  "M=M-1\n"+
                  "A=M\n"+
                  "D=M\n"+
                  "@THIS\n"+
                  "M=D\n"+
                   // ARG = *(FRAM-3)
                  "@LCL\n"+
                  "M=M-1\n"+
                  "A=M\n"+
                  "D=M\n"+
                  "@ARG\n"+
                  "M=D\n"+
                 // LCL = *(FRAM-4)
                   "@LCL\n"+
                   "M=M-1\n"+
                   "A=M\n"+
                   "D=M\n"+
                   "@LCL\n"+
                   "M=D\n"+

                   // goto RET
                   "@13\n"+
                   "A=M\n"+
                   "0; JMP\n"
      }

  public static var _one_parameter : HashMap as  one_parameter =
      {
          "label" -> "(FileName.label)\n",

          "if-goto" ->
              "@SP\n"+
              "M=M-1\n"+
              "A=M			\n"+
              "D=M\n"+
              "@FileName.label\n"+
              "D;JNE\n",

          "goto" ->
              "@FileName.label\n"+
              "0; JMP\n"

      }
  public static var _two_parameter : HashMap as  two_parameter =
      {

          "function" ->
              // label g
              "(firstParameter)\n"+
                  "@secondParameter\n"+
                  "D=A\n"+
                  "@ f.End\n"+
                  "D; JEQ\n"+
                  "(f.Loop)\n"+
                  "@SP \n"+
                  "A=M\n"+
                  "M=0\n"+
                  "@SP\n"+
                  "M=M+1\n"+
                  "@ f.Loop\n"+
                  "D=D-1;JNE\n"+
                  "(f.End)\n",


          "call" ->
              // push return-address
              "@firstParameter.ReturnAddress\n"+
                  "D=A\n"+
                  "@SP\n"+
                  "A=M\n"+
                  "M=D\n"+
                  "@SP\n"+
                  "M=M+1\n"+
                  // push LCL
                  "@LCL\n"+
                  "D=M\n"+
                  "@SP\n"+
                  "A=M\n"+
                  "M=D\n"+
                  "@SP\n"+
                  "M=M+1\n"+
                  // push ARG
                  "@ARG\n"+
                  "D=M\n"+
                  "@SP\n"+
                  "A=M\n"+
                  "M=D\n"+
                  "@SP\n"+
                  "M=M+1\n"+
                  // push THIS
                  "@THIS\n"+
                  "D=M\n"+
                  "@SP\n"+
                  "A=M\n"+
                  "M=D\n"+
                  "@SP\n"+
                  "M=M+1\n"+
                  // push THAT
                  "@THAT\n"+
                  "D=M\n"+
                  "@SP\n"+
                  "A=M\n"+
                  "M=D\n"+
                  "@SP\n"+
                  "M=M+1\n"+

                  // ARG = SP-n-5
                  "@SP\n"+
                  "D=M\n"+
                  "secondParameter\n"+
                  "D=D-A\n"+
                  "@ARG\n"+
                  "M=D\n"+
                  // LCL = SP
                  "@SP\n"+
                  "D=M\n"+
                  "@LCL\n"+
                  "M=D\n"+
                  // goto g
                  "@firstParameter\n"+
                  "0; JMP\n"+
                  // label return-address
                  "(firstParameter.ReturnAddress)\n"
      }

          public static var _push_pop : HashMap as push_pop =
      {

          "push constant" -> "@{number}\n" +
              "D = A\n" +
              //CommonGround: (push D)
              "@0\n" +
              "A = M\n" +
              "M = D\n" +
              "@0\n" +
              "M = M+1\n",
          //there is no pop constant

          "push static" -> "@{number}\n" + //same for this, that, and static
              "D = M\n" +
              //CommonGround: (push D)
              "@0\n" +
              "A = M\n" +
              "M = D\n" +
              "@0\n" +
              "M = M+1\n",

          "pop static" -> "@0\n" +    //get the value of the stack top
              "M=M-1\n" + //decrement the stack top pointer (pop)
              "A=M\n" +  // A equals the address of the top of the stack
              "D=M\n" + // D equals stack top value
              //popped
              "@{number}\n" +
              "M=D\n",



          "push temp" -> "@{number}\n" + // when should we calculate this??
              "D = M\n" +
              //CommonGround: (push D)
              "@0\n" +
              "A = M\n" +
              "M = D\n" +
              "@0\n" +
              "M = M+1\n",

          "pop temp" -> "@0\n" +    //get the value of the stack top
              "M=M-1\n" + //decrement the stack top pointer (pop)
              "A=M\n" +  // A equals the address of the top of the stack
              "D=M\n" + // D equals stack top value
              //popped
              "@{number}\n" +    // when should we calculate this??
              "M=D\n",


          "push segment" -> "@{area}\n" +
              "D=M\n" +
              "@{number}\n" +
              "A=D+A\n" +
              "D=M\n" +
              //CommonGround: (push D)
              "@0\n" +
              "A = M\n" +
              "M = D\n" +
              "@0\n" +
              "M = M+1\n",

          // we cannot pop in the beginnings, because we need D for the rest of the calculation
          "pop segment" -> "@{area}\n" +
              "D=M\n" + // D = address of {area}
              "@{number}\n" + // A = {number}
              "D=D+A\n" + // now D points at the target "{area} {number}"

              "@0\n" + // A=0
              "M=M-1\n" + // SP=SP-1
              "A=M\n" + //
              "A=M\n" + // A=STACK[SP]

              //now we swithch between A and D
              "A=A+D\n" +
              "D=A-D\n" +
              "A=A-D\n" + // D=STACK[SP], A=address of {area} {number}

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
  public static var _segment : HashMap as segment =
      {
          "local"->'LCL',
          "argument"->'ARG',
          "this"->'THIS',
          "that"->'THAT'
      }
}