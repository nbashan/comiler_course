@0
D = A
@0
A = M
M = D
@0
M = M+1
@LCL
D=M
@0
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
M=D
(BasicLoop.LOOP_START)
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
@0	
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
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
@1
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
D=M-D
M=D
@SP
M=M+1
@ARG
D=M
@0
D=D+A
@0
M=M-1
A=M
A=M
A=A+D
D=A-D
A=A-D
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
@SP
M=M-1
A=M			
D=M
@BasicLoop.LOOP_START
D;JNE
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
