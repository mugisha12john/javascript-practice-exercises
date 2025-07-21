// `"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
const str= "the-stealth-warrior"
const arr= str.split('-')
.map((str,i)=> str[0].toUpperCase()+
str.slice(1,str.length)).join('')
const lowerFirstElement=arr[0].toLowerCase()+arr.slice(1,arr.length)
console.log(lowerFirstElement)