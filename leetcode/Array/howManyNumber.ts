/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 */

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let count: number = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] > nums[j]) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
}
