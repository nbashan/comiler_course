@17
D = A
@0
A = M
M = D
@0
M = M+1
@17
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
@EQ.0_TRUE
D;JEQ
@SP
A=M
M=0
@EQ.0_END
0;JMP
(EQ.0_TRUE)
@SP
A=M
M=-1
(EQ.0_END)
@SP
M=M+1
@17
D = A
@0
A = M
M = D
@0
M = M+1
@16
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
@EQ.1_TRUE
D;JEQ
@SP
A=M
M=0
@EQ.1_END
0;JMP
(EQ.1_TRUE)
@SP
A=M
M=-1
(EQ.1_END)
@SP
M=M+1
@16
D = A
@0
A = M
M = D
@0
M = M+1
@17
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
@EQ.2_TRUE
D;JEQ
@SP
A=M
M=0
@EQ.2_END
0;JMP
(EQ.2_TRUE)
@SP
A=M
M=-1
(EQ.2_END)
@SP
M=M+1
@892
D = A
@0
A = M
M = D
@0
M = M+1
@891
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
@LT.0_TRUE
D;JLT
@SP
A=M
M=0
@LT.0_END
0;JMP
(LT.0_TRUE)
@SP
A=M
M=-1
(LT.0_END)
@SP
M=M+1
@891
D = A
@0
A = M
M = D
@0
M = M+1
@892
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
@LT.1_TRUE
D;JLT
@SP
A=M
M=0
@LT.1_END
0;JMP
(LT.1_TRUE)
@SP
A=M
M=-1
(LT.1_END)
@SP
M=M+1
@891
D = A
@0
A = M
M = D
@0
M = M+1
@891
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
@LT.2_TRUE
D;JLT
@SP
A=M
M=0
@LT.2_END
0;JMP
(LT.2_TRUE)
@SP
A=M
M=-1
(LT.2_END)
@SP
M=M+1
@32767
D = A
@0
A = M
M = D
@0
M = M+1
@32766
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
@GT.0_TRUE
D;JGT
@SP
A=M
M=0
@GT.0_END
0;JMP
(GT.0_TRUE)
@SP
A=M
M=-1
(GT.0_END)
@SP
M=M+1
@32766
D = A
@0
A = M
M = D
@0
M = M+1
@32767
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
@GT.1_TRUE
D;JGT
@SP
A=M
M=0
@GT.1_END
0;JMP
(GT.1_TRUE)
@SP
A=M
M=-1
(GT.1_END)
@SP
M=M+1
@32766
D = A
@0
A = M
M = D
@0
M = M+1
@32766
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
@GT.2_TRUE
D;JGT
@SP
A=M
M=0
@GT.2_END
0;JMP
(GT.2_TRUE)
@SP
A=M
M=-1
(GT.2_END)
@SP
M=M+1
@57
D = A
@0
A = M
M = D
@0
M = M+1
@31
D = A
@0
A = M
M = D
@0
M = M+1
@53
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
@112
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

@0
AM=M-1
D=-M
M=D
@SP
M=M+1
@0
M=M-1
A=M
D=M
A=A-1
M=D&M
@SP
M=M+1
@82
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
A=A-1
M=D|M
@0
A=M-1
M=!M
@SP
M=M+1
