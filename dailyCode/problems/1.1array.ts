// ## 1.1 Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i

// For example -
// - input: [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30,24]
// - input: [3, 2, 1], the expected output would be [2, 3, 6]

// TODO: handle zero array element items

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 2, 1];

// export const getAllProduct = (arr: number[]): number[] => {
//   let temp: number[] = [];
//   let total: number = 1;

//   for (let index = 0; index < arr.length; index++) {
//     total *= arr[index];
//   }

//   for (let index = 0; index < arr.length; index++) {
//     temp.push(total / arr[index]);
//   }
//   return temp;
// };
// console.log(getAllProduct(arr1));

export const getAllProduct = (nums: number[]): number[] => {
  const n = nums.length;
  const result: number[] = new Array(n).fill(1);

  // Step 1: Calculate the product of all elements to the left of each index.
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Step 2: Calculate the product of all elements to the right of each index.
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

console.log(getAllProduct([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(getAllProduct([3, 2, 1])); // [2, 3, 6]
