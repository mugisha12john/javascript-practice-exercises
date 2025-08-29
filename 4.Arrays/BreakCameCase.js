/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/
function solution(string) {

  let index = string.split('').map((a,i)=> {
      let arr=''
     return  a === a.toUpperCase()? arr+=` ${a}`:arr+=a
  }).join('')
  return index
  
}
console.log(solution("camelCasingTest"))