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
@THAT
M=D
@0
D = A
@0
A = M
M = D
@0
M = M+1
@THAT
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
@1
D = A
@0
A = M
M = D
@0
M = M+1
@THAT
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
@2
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
(FibonacciSeries.MAIN_LOOP_START)
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
@FibonacciSeries.COMPUTE_ELEMENT
D;JNE
@FibonacciSeries.END_PROGRAM
0; JMP
(FibonacciSeries.COMPUTE_ELEMENT)
@THAT
D=M
@0
A=D+A
D=M
@0
A = M
M = D
@0
M = M+1
@THAT
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
@THAT
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
@THAT
D = M
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
D=M+D
M=D
@SP
M=M+1
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
@FibonacciSeries.MAIN_LOOP_START
0; JMP
(FibonacciSeries.END_PROGRAM)
