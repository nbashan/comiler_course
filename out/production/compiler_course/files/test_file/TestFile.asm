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
@Sys.init.returnAdd
0;JMP
(Sys.init.returnAdd)
(Class1.set)
@0
D=A
@ f.End
D; JEQ
(f.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@ f.Loop
D=D-1;JNE
(f.End)
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
@0
M=M-1
A=M
D=M
@Class1.0
M=D
@ARG
D=M
@1
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@0
M=M-1
A=M
D=M
@Class1.1
M=D
@0
D = A
@0
A = M
M = D
@0
M = M+1
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
(Class1.get)
@0
D=A
@ f.End
D; JEQ
(f.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@ f.Loop
D=D-1;JNE
(f.End)
@Class1.0
D = M
@0
A = M
M = D
@0
M = M+1
@Class1.1
D = M
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
D=M-D
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
