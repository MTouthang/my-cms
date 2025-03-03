//  first approach
// const arr = [3, 0, 1];

// function missingNumber(nums) {
//   let max = Math.max(...nums);
//   let result = 0;

//   for (let i = 0; i < max; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (i !== nums[j]) {
//         result = i;
//       }
//     }
//   }
//   return result;
// }

// second approach
function missingNumber(nums: number[]): number {
  // logic - Actual total sum - expected total sum
  const n: number = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // sum of n natural number

  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}
