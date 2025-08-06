function isIsogram(str){
  const letterOccerance= str.toLowerCase().split('').reduce((a,b)=>{
    a[b]=(a[b] || 0) + 1
    return a
  },{})
let out=[]
  for(const [n,i] of Object.entries(letterOccerance)){
    out.push(i)
  }
  const mostOccarence = out.filter(num => num>1)
  if(mostOccarence[0] >= 2){
    return false
  }else{
    return true
  }
}
console.log(isIsogram("Derrmgatogglyphics"))

