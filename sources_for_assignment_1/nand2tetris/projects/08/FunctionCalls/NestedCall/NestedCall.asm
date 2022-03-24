@256
D=A
@SP
M=D
@Sys.init.returnAdd
D=A
@SP
A=M
M=D
@SP
M=M+1
@LCL
D=M
@SP
A=M
M=D
@SP
M=M+1
@ARG
D=M
@SP
A=M
M=D
@SP
M=M+1
@THIS
D=M
@SP
A=M
M=D
@SP
M=M+1
@THAT
D=M
@SP
A=M
M=D
@SP
M=M+1
@SP
D=M
@5
D=D-A
@ARG
M=D
@SP
D=M
@LCL
M=D
@Sys.init
0;JMP
(Sys.init.returnAdd)
(Sys.init)
@0
D=A
@ Sys.init.End
D; JEQ
(Sys.init.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Sys.init.Loop
D=D-1;JNE
(Sys.init.End)
@4000	//
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THIS
M=D
@5000
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THAT
M=D
@Sys.main.ReturnAddress.0
D=A
@SP
A=M
M=D
@SP
M=M+1
@LCL
D=M
@SP
A=M
M=D
@SP
M=M+1
@ARG
D=M
@SP
A=M
M=D
@SP
M=M+1
@THIS
D=M
@SP
A=M
M=D
@SP
M=M+1
@THAT
D=M
@SP
A=M
M=D
@SP
M=M+1
@SP
D=M
@5
D=D-A
@ARG
M=D
@SP
D=M
@LCL
M=D
@Sys.main
0; JMP
(Sys.main.ReturnAddress.0)
@0
M=M-1
A=M
D=M
@6
M=D
(Sys.LOOP)
@Sys.LOOP
0; JMP
(Sys.main)
@5
D=A
@ Sys.main.End
D; JEQ
(Sys.main.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Sys.main.Loop
D=D-1;JNE
(Sys.main.End)
@4001
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THIS
M=D
@5001
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THAT
M=D
@200
D = A
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@1
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
M=D
@40
D = A
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@2
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
M=D
@6
D = A
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@3
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
M=D
@123
D = A
@0
A = M
M = D
@0
M = M+1
@Sys.add12.ReturnAddress.1
D=A
@SP
A=M
M=D
@SP
M=M+1
@LCL
D=M
@SP
A=M
M=D
@SP
M=M+1
@ARG
D=M
@SP
A=M
M=D
@SP
M=M+1
@THIS
D=M
@SP
A=M
M=D
@SP
M=M+1
@THAT
D=M
@SP
A=M
M=D
@SP
M=M+1
@SP
D=M
@6
D=D-A
@ARG
M=D
@SP
D=M
@LCL
M=D
@Sys.add12
0; JMP
(Sys.add12.ReturnAddress.1)
@0
M=M-1
A=M
D=M
@5
M=D
@LCL
D=M
@0
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@1
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@2
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@3
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@4
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
@LCL
D=M
@5
A=D-A
D=M
@13
M=D
@SP
M=M-1
A=M
D=M
@ARG
A=M
M=D
@ARG
D=M
@SP
M=D+1
@LCL
M=M-1
A=M
D=M
@THAT
M=D
@LCL
M=M-1
A=M
D=M
@THIS
M=D
@LCL
M=M-1
A=M
D=M
@ARG
M=D
@LCL
M=M-1
A=M
D=M
@LCL
M=D
@13
A=M
0; JMP
(Sys.add12)
@0
D=A
@ Sys.add12.End
D; JEQ
(Sys.add12.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Sys.add12.Loop
D=D-1;JNE
(Sys.add12.End)
@4002
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THIS
M=D
@5002
D = A
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@THAT
M=D
@ARG
D=M
@0
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@12
D = A
@0
A = M
M = D
@0
M = M+1
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
@LCL
D=M
@5
A=D-A
D=M
@13
M=D
@SP
M=M-1
A=M
D=M
@ARG
A=M
M=D
@ARG
D=M
@SP
M=D+1
@LCL
M=M-1
A=M
D=M
@THAT
M=D
@LCL
M=M-1
A=M
D=M
@THIS
M=D
@LCL
M=M-1
A=M
D=M
@ARG
M=D
@LCL
M=M-1
A=M
D=M
@LCL
M=D
@13
A=M
0; JMP
