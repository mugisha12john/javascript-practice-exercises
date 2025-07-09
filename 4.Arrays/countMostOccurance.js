/*Complete the function to find the count of the most frequent item of an array. 
You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5*/
function mostFrequentItemCount(collection) {
    if (!collection || collection.length === 0) {
    return 0
  }
  let occarence = collection.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let mostFrequentElement = collection[0];
  let maxCount = occarence[collection[0]] || 0;

  for (const num in occarence) {
    if (occarence[num] > maxCount) {
      maxCount = occarence[num];
      mostFrequentElement = Number(num);
    }
  }

  return maxCount;
}
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))