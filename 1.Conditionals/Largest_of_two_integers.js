//Write a JavaScript program that displays the largest integer among two integers.
function getLargest(a,b) {
    if (a>b) {
      return a;
    }
    else if(b>a){
      return b;
    }
    else{
      console.log("two number are equal");
    }
  }
  console.log(getLargest(2,4))