/**
 * Find the max sum of an array of integers,
 * only taking `k` items from the right and left side sequentially.
 *
 * @param {number[]} arr - The array of integers
 * @param {number} k - The number of elements to sum up.
 * @returns {number}
 */
function maxSum(arr, k) {
  let left = k - 1;
  let right = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;

  for (let i = 0; i < k; i++) {
    sum += arr[right--] - arr[left--];
    max = Math.max(max, sum);
  }

  return max;
}

console.log(maxSum([1, 3, 45, 6, 7, 3, 24, 6, 7]));
