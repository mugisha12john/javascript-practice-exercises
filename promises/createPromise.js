async function createPromise(number) {
  return new Promise((resolve, reject) => {
    if (number < 0) {
      resolve(`It's negative!`);
    } else {
      resolve(`It's positive!`);
    }
  });
}
createPromise(21).then(console.log).catch(console.error);
export { createPromise };
