/*In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.*/
function solve(arr){
  const frequent=  arr.reduce((a,b)=>{
    a[b] = (a[b] || 0)+1
    return a
  },{})
  return arr.sort((a,b)=>{
    if(frequent[b] === frequent[a]){
      return a -b
    }
    return frequent[b] - frequent[a]
  })
}

console.log(solve([2,3,5,3,7,9,5,3,7]))
