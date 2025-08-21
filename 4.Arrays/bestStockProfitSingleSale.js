/*You're a buyer/seller and your business is at stake .. You need to make a profit .. Or at least, you need to lose the least amount of money!
Knowing a list of prices for buy/sell operations, you need to pick two of them. Buy/sell market is evolving across time and the list represent this evolution. First, you need to buy one item, then sell it later. Find the best profit you can do.

Example:
Given an array of prices [3, 10, 8, 4], the best profit you could make would be 7 because you buy at 3 first, then sell at 10.

Input:
A list of prices (integers), of length 2 or more.

Output:
The result of the best buy/sell operation, as an integer.

Note:
Be aware you'll face lists with several thousands of elements, so think about performance.*/
function maxProfit(prices) {
  let lower = prices[0]
  let profit = -Infinity

  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < lower) {
      lower = prices[i - 1]
    }
    let best = prices[i] - lower
    if (best > profit) {
      profit = best
    }
  }
  return profit
}
console.log(maxProfit([10,7,5,4,1]))        // -1
console.log(maxProfit([34,30,24,18,12,9,3,0])) // -3
console.log(maxProfit([10,7,5,8,11,9]))    // 6
console.log(maxProfit([3,10,8,4]))         // 7
console.log(maxProfit([3,2,1]))            // -1
