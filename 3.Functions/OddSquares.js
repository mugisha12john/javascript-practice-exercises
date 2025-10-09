/*oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]
*/
function oddSquare(array){
    if(!Array.isArray(array)) return "it's not an array"
    return array.filter(a=> a%2 !== 0).map(b=> b*b)
}
console.log(oddSquare([1,2,3,4,5,6]))
console.log(oddSquare([10,15,20,25,30]))
console.log(oddSquare("hello"))