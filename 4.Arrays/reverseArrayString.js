/*Write a function that takes in an array of strings, then reverses each 
string in that array and returns an array of the reversed versions of strings in descending order.



input: ["apple", "banana", "cherry"]
output: ["yrrehc", "elppa", "ananab"]

input: ["cat", "bat", "rat"]
output: ["tar", "tab", "tac"]

input: ["one", "two", "three", "four"]
output: ["owt", "eerht", "ruof", "eno"]
*/

function reveseArray(array){
    let rev = array.map(item=>{
        let arrRev = item.split('').reverse().join('')
        return arrRev
    })
    return rev.sort().reverse()
}
console.log(reveseArray(["apple", "banana", "cherry"]))