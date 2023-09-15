// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * Time O(n) where n is the number of numbers in the array nums
 * Space O(1)
 */
var shuffle = function (nums, n) {
  const result = [];

  for (let left = 0; left < n; left++) {
    const right = n + left;
    result.push(nums[left]);
    result.push(nums[right]);
  }
  return result;
};
