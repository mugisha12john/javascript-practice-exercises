// Using fetchSimulator, simulate fetching data from three different URLs in parallel.
//  Each “fetch” will be represented by a Promise that resolves after a 
// delay taken from the delays array. Use Promise.all() to wait for all 
// these Promises to resolve and then process the results.
const delays = [800, 1200, 1000];
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];

// function fetchSimulator() {
//   let fetch1 = fetch(apiUrls[0]);
//   let fetch2 = fetch(apiUrls[1]);
//   let fetch3 = fetch(apiUrls[2]);
//   Promise.all([fetch1, fetch2, fetch3])
//     .then((res) => {
//       res.forEach((Element, index) => {
//         console.log(`wait for response ${index}`);
//         setTimeout(() => {
//           Element.json()
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err));
//         }, delays[index]);
//       });
//     })
//     .catch((err) => console.log(err));
// }
// fetchSimulator();
