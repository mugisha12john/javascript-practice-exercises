/*Given three arrays of integers, return the sum of elements that are common in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays*/
function common(a,b,c){
  let count1 = a.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) +1
    return acc
    },{})
      let count2 = b.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) +1
    return acc
    },{})
      let count3 = c.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0) +1
    return acc
    },{})
let sum = 0;
for (let i in count1) {
  if (count2[i] !== undefined && count3[i] !== undefined) {
    let minNum = Math.min(count1[i], count2[i], count3[i]);
    let num = Number(i);
    sum += minNum * num;
  }
}
return sum;

}
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]))//2,2 & 3
