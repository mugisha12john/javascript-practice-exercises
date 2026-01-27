// async function promiseAny(...promise){
//     let response = await Promise.any([...promise])
//    console.log(response)
// }
// const p1 = new Promise((resolve,reject)=>{
//     resolve('https://jsonplaceholder.typicode.com/posts')
// })
// .then(d => d.json())
// const p2 = new Promise((resolve,reject)=>{
//     resolve('https://jsonplaceholder.typicode.com/comments')
// })
// .then(d =>d.json())
// console.log(promiseAny(p1,p2))
async function PromiseAny() {
  let request = await Promise.any([
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json(),
    ),
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json(),
    ),
  ]);
  return request;
}

PromiseAny()
  .then((data) => {
    console.log("first data is");
    console.log(data);
  })
  .catch(console.error);
