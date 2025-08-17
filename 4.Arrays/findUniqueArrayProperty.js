/*Your task is to return unique objects from an array.
You will receive two arrays, objs and keys. Unique objects mean that the object properties defined on keys are unique, for example:
// keys
[ 'x', 'y' ]
// objs
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
{ x: 1, y: 1, z: 3 },
The expected result is:
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
Because x and y repeat on the first and last element, so only the first will be picked up.
If a key is not present in the object the value of this property will be considered "not defined" native value for the current language.*/
function unique(arr, keys) {
  let occur = new Set()
  let result = []
  for(obj of arr){
    const sign = keys.map(k => obj[k] !== undefined ? obj[k] : 'undefined').join('|')
    if(!occur.has(sign)){
      occur.add(sign)
      result.push(obj)
    }
  }
  return result
}
const objs = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 },
    ];
const keys = [ 'x', 'y' ];
console.log(unique(objs,keys))