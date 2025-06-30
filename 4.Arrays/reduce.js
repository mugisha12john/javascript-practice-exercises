/*find sum of all element in array*/

const numbers = [10, 20, 30, 40]
const sum = numbers.reduce((prev,cur)=> prev+cur,0)
console.log(sum)

/*find max number in array*/

const num = [5, 9, 2, 11, 4];
const max = num.reduce((acc,cur)=> acc > cur ? acc : cur)
console.log(max)

// word counting occerance
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = words.reduce((acc,cur)=> {
    acc[cur] = (acc[cur] || 0)+1 
    return acc}, {})
console.log(count)

// join flaten array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const joinArray =  nestedArray.reduce((acc,curr)=> [...acc,...curr])
console.log(joinArray)

//Sum Prices from Objects return 65
const items = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 5 },
  { name: 'Bag', price: 50 }
];

const sumPrice = items.reduce((acc,cur)=>{
    return acc + cur.price
},0)
console.log(sumPrice)