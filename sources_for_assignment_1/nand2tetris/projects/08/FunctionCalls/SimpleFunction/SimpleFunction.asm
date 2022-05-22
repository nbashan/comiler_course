(SimpleFunction.test)
@2
D=A
@ SimpleFunction.test.End
D; JEQ
(SimpleFunction.test.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@SimpleFunction.test.Loop
D=D-1;JNE
(SimpleFunction.test.End)
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
D=!M
M=D
@SP
M=M+1
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
@SP
AM=M-1
D=M
@SP
AM=M-1
D=M+D
M=D
@SP
M=M+1
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
