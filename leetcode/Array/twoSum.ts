/**
 * brute force approach
 */
// function twoSum(nums: number[], target: number): number[] {
//     let result: number [] = []
//     let match: boolean = false

//     for(let i = 0; i<nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if( !(i === j) && nums[i] + nums[j] === target) {
//                 match = true
//                 result.push(i)
//                 result.push(j)
//                 break;
//             }

//         }
//         if (match){
//             break
//         }
//     }
//     return result
// };

// optimize approach
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>(); // HashMap to store seen numbers & their indices

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]; // Find the needed complement

    if (map.has(complement)) {
      return [map.get(complement)!, i]; // Return indices (using ! to assert non-null)
    }
    map.set(nums[i], i); // Store the current number with its index
  }
  return []; // Return empty array if no solution found
}
