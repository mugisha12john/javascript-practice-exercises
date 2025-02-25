// calculate student marks 
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
let score = 45;

if (score >= 90) {
    console.log("Grade is A");
} else if (score >= 80) {
    console.log("Grade is B");
} else if (score >= 70) {
    console.log("Grade is C");
} else if (score >= 60) {
    console.log("Grade is D");
} else if (score < 60) {
    console.log("Grade is F");
} else {
    console.log("Invalid score");
}
