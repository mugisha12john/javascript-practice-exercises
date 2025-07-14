function sortItOut(array){
let evenWays = array.filter((num)=> Math.floor(num)%2 ===0).sort((a,b)=> b-a)
let oddWays = array.filter((num)=> Math.floor(num)%2 !==0).sort((a,b)=> a-b)
return oddWays.concat(evenWays)
}
console.log(sortItOut([1,2,3,4,5,6,7,8,9]))