/**
 * Given an array of numbers, :find the maximum sum of any contiguous subarray of
the array. For example, given the array [34, -50, 42, 14, -5, 86], the maximum
sum would be 137, since we would take elements 42, 14, -5, and 86. Given the array
[ -5, -1, -8, -9], the maximum sum would be 0, since we would choose not to
take any elements.
 *
 * @param {number[]} nums
 * @returns {number}
 */
const nums = [-5, -1, -8, -9];
export const maxSubArray = (nums: number[]): number => {
  let maxSum: number = 0; // Start with 0 since we can choose not to take any elements
  let currSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    // If the current sum exceeds maxSum, update maxSum
    maxSum = Math.max(maxSum, currSum);

    // If currSum drops below 0, reset it to 0 (as a negative sum won't help)
    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray(nums));
