/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 * Time O(n log n)
 * Space O(1)
 */
var maxIceCream = function (costs, coins) {
  let max = Math.max(...costs);
  let countSort = Array(max + 1).fill(0);
  let res = 0;

  for (let i of costs) {
    countSort[i]++;
  }

  for (let cost = 1; cost <= max; cost++) {
    if (!countSort[cost]) continue;

    // not enough money to buy even a single ice cream
    if (coins < cost) break;

    let count = Math.min(countSort[cost], Math.floor(coins / cost));
    coins -= cost * count;
    res += count;
  }

  return res;
};
