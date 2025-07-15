/*You've just discovered a square (NxN) field and you notice a warning sign. 
The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array.
 Areas in the 2D array that are not the mine will be represented as 0s.
 Examples (Input --> Output)
[ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]

[ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]

[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]
 */
 function mineLocation(field){
let output = []
for(let i=0;i<field.length;i++){
  for(let x=0;x<field[i].length;x++){
    if(field[i][x] === 1){
      let ElementIndex= field[i].indexOf(field[i][x])
      output.push(i,ElementIndex)
      return output
    }
  }
}
}