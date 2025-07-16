var searchArray = function (arrayToSearch, query) {
  if(!Array.isArray(query) || query.length !== 2){
   throw new Error("Query must be an array of length 2.");
  }
    if (!Array.isArray(arrayToSearch)) {
    throw new Error("arrayToSearch must be a 2D array.");
  }
for(let i=0;i<arrayToSearch.length;i++){
  if(!Array.isArray(arrayToSearch[i]) || arrayToSearch[i].length !== 2){
    throw new Error("Each element in arrayToSearch must be an array of length 2.");
  }
  if(arrayToSearch[i][0] === query[0]&&
  arrayToSearch[i][1] === query[1]){
    return i
  }
}
return -1
}
console.log(searchArray([[1,2],[3,4],[5,6]],[5,6]))