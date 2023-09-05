/**
 * Find two numbers that add up target.
 * @param arr - The array of integers
 * @param target - The target
 * @returns {number[]} - array with the values that add up to target.
 */
function twoSum(arr, target) {
  //O(n^2)
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === target) return [arr[i], arr[j]];
  return [];
}
