console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');

// medium excersises
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve()
  .then(() => {
    console.log(3);
    return Promise.resolve(4);
  })
  .then(console.log);

console.log(5);
// stricky one 
Promise.resolve()
  .then(() => {
    throw new Error('Oops');
  })
  .then(() => console.log('A'))
  .catch(() => console.log('B'))
  .then(() => console.log('C'));
// answer is B,C since the error is caught in the catch block and the subsequent then is executed normally

// advanced one
Promise.resolve(1)
  .then(x => {
    console.log(x);
    return x + 1;
  })
  .then(x => {
    throw x + 1;
  })
  .catch(x => {
    console.log(x);
    return x * 2;
  })
  .then(x => console.log(x));
