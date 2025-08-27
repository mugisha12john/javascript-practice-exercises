/*We have an array of strings. All strings contain similar letters except one. Write a function findUniq that finds the unique string. 
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'*/

function findUniq(string) {
  let count = string
    .map((str) => {
      return str;
    })
    .join("")
    .toString()
    .split("")
    .reduce((a,b)=> {
        a[b] = (a[b] || 0)+1
        return a
    },{})
  let largest = 0;
  let most
  for([str,r] of Object.entries(count)){
    if(r> largest){
        largest=r
        most = str
    }
  }
  return string.map(str => str).filter(s=> !s.includes(most));
}
console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
