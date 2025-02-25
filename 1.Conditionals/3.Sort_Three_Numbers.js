function SortNumbers(a,b,c) {
  if(a>b && a>c ){
    if (b>c) {
      return `this is sort ${a},${b},${c}`
    }
  }
  else if(b>a && b>c){
    if(a>c){
      return `this is sort ${b},${a},${c}`
    }
  }
  else if(c>a && c>b){
    if(a>b){
      return `this is sort ${c},${a},${b}`
    }
  }
  else{
    return "three Number are equal"
  }
}
console.log(SortNumbers(5,2,7))