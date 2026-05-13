function solution (roman) {
// const romans={
//   "I":1,
//   "V":5,
//   "X":10,
//   "L":50,
//   "C":100,
//   "D":500,
//   "M":1000
// }  
// let result=0
//   for (let i= 0; i<roman.length; i++){
//     const next=romans[roman[i+1]]
//      const curr=romans[roman[i]];
//     if(next){
//       if(curr < next){
//         result -=curr;
//         continue;
//       }
//     }
//     result +=curr
//   }
  
// 	return result;

const romanMap={
  "I":1,
  "V":5,
  "X":10,
  "L":50,
  "C":100,
  "D":500,
  "M":1000
}  
let result=0
  for (let i= 0; i<roman.length; i++){
    const nextIndex=romanMap[roman[i+1]] || 0
     const currentIndex=romanMap[roman[i]];
  
      if(currentIndex < nextIndex){
        result -= currentIndex;
        continue;
      }
    
    result += currentIndex
  }
  
	return result;
}

console.log(solution('MMVIII'))