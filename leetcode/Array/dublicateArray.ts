/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// for last date the above question will give "Time Limit Exceeded"
// so we need set to solve this is
function containsDuplicateOpt(nums: number[]): boolean {
  let uniqueArr = new Set();

  for (let num of nums) {
    if (uniqueArr.has(num)) {
      return true;
    }
    uniqueArr.add(num);
  }
  return false;
}
