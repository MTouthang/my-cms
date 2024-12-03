/**    
 * Given an array of integers that are out of order, determine the bounds of the smallest
    window that must be sorted in order for the entire array to be sorted. For example,
    given [ 3 , 7 , 5 , 6 , 9] , you should return ( 1 , 3 )

 */
const arr = [3, 7, 5, 6, 9];

export const findUnsortedWindow = (arr: number[]): number[] => {
  let left: number | null = null;
  let right: number | null = null;

  const sortedArr = [...arr].sort((a, b) => a - b);
  console.log(sortedArr);

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] != sortedArr[index] && left == null) {
      left = index;
    } else if (arr[index] != sortedArr[index]) {
      right = index;
    }
  }

  // Default to [-1, -1] if the array is already sorted
  if (left === null || right === null) {
    return [-1, -1];
  }

  return [left, right];
};

const result = findUnsortedWindow(arr);
console.log(result);
