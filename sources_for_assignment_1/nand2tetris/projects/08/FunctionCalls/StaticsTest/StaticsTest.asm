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
(Class1.set)
@0
D=A
@ Class1.set.End
D; JEQ
(Class1.set.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Class1.set.Loop
D=D-1;JNE
(Class1.set.End)
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
@ Class1.get.End
D; JEQ
(Class1.get.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Class1.get.Loop
D=D-1;JNE
(Class1.get.End)
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
(Class2.set)
@0
D=A
@ Class2.set.End
D; JEQ
(Class2.set.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Class2.set.Loop
D=D-1;JNE
(Class2.set.End)
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
@Class2.0
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
@Class2.1
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
(Class2.get)
@0
D=A
@ Class2.get.End
D; JEQ
(Class2.get.Loop)
@SP 
A=M
M=0
@SP
M=M+1
@Class2.get.Loop
D=D-1;JNE
(Class2.get.End)
@Class2.0
D = M
@0
A = M
M = D
@0
M = M+1
@Class2.1
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
@6
D = A
@0
A = M
M = D
@0
M = M+1
@8
D = A
@0
A = M
M = D
@0
M = M+1
@Class1.set.ReturnAddress.5
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
@7
D=D-A
@ARG
M=D
@SP
D=M
@LCL
M=D
@Class1.set
0; JMP
(Class1.set.ReturnAddress.5)
@0
M=M-1
A=M
D=M
@5
M=D
@23
D = A
@0
A = M
M = D
@0
M = M+1
@15
D = A
@0
A = M
M = D
@0
M = M+1
@Class2.set.ReturnAddress.6
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
@7
D=D-A
@ARG
M=D
@SP
D=M
@LCL
M=D
@Class2.set
0; JMP
(Class2.set.ReturnAddress.6)
@0
M=M-1
A=M
D=M
@5
M=D
@Class1.get.ReturnAddress.7
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
@Class1.get
0; JMP
(Class1.get.ReturnAddress.7)
@Class2.get.ReturnAddress.8
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
@Class2.get
0; JMP
(Class2.get.ReturnAddress.8)
(Sys.WHILE)
@Sys.WHILE
0; JMP
