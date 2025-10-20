/*Given a string consisting entirely of binary digits (0 , 1) seperated using spaces. Find the XOR of all digits and return the answer.

Examples :
Given

"1 0 0 1 0" --> 0
"1 0 1 1 1 0 0 1 0 0 0 0" --> 1*/
X=s=>s.split``.reduce((a,b)=>a^b,0)