# chapter 1 Array

Arrays are -

- are without a doubt the most fundamental data structure in computer science.
- It is represented by a fixed size, contigous block of memory with 0(1) time to store and access an element.
- because of this efficiency, many other data structures frequently use arrays for their implemenation, such as strings, stacks, queue and hash tables.
- it start with the index o 0 and ending with length - 1

However some array limitation include -

- looking up an element by value typically requires an entire traversal of the array
- deleting an element from an array means that all subsequent elements have to be shifted left by one,leading O(n)
- and so the insertion
- it has fixed bound

## 1.1 Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i

For example -

- input: [1, 2,3, 4, 5], the expected output would be [120, 60, 40, 30,24]
- input: [3, 2, 1], the expected output would be [2, 3, 6

my-intuition -

```
// attemp 1 - (❌)
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [3, 2, 1];

const gelAllProduct = (arr: number[]): number[] => {
  let temp: number[] = [];
  let total: number = 1;

  for (let index = 0; index < arr.length; index++) {
    total *= arr[index];
  }

  for (let index = 0; index < arr.length; index++) {
    temp.push(total / arr[index]);
  }
  return temp;
};
console.log(gelAllProduct(arr1));
```

The above code passed the test for some test cases and failed for the input of - arr: [0, 2, 3] which will have input of arr: [6, 0, 0]

```
// attemp 2 (✅)
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
```

This runs in 0(n) time and space complexity, since iterating over the input array takes 0(n) time and the leftProduct and rightProduct arrays take up 0(n) space.

## 1.2 Locate smallest window to be sorted

Given an array of integers that are out of order, determine the bounds of the smallest
window that must be sorted in order for the entire array to be sorted. For example,
given [ 3 , 7 , 5 , 6 , 9] , you should return ( 1 , 3 ).

## 1.3 Calculate maximum subarray sum

Given an array of numbers, :find the maximum sum of any contiguous subarray of
the array. For example, given the array [34, -50, 42, 14, -5, 86], the maximum
sum would be 137, since we would take elements 42, 14, -5, and 86. Given the array
[ -5, -1, -8, -9], the maximum sum would be 0, since we would choose not to
take any elements

```
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
  let maxSum: number = -Infinity;
  let currSum: number = 0;

  if (nums.length == 1) {
    if (nums[0] < 1) {
      maxSum = 0;
    }
  }

  for (let j = 0; j < nums.length; i++) {
    if (nums[j] < 0) {
      maxSum = 0;
    }
    return maxSum;
  }

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray(nums));

```

```
*updated code with all test pass
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
  let maxSum: number = -Infinity;
  let currSum: number = 0;

  if (nums.length == 1) {
    if (nums[0] < 1) {
      maxSum = 0;
    }
  }

  for (let j = 0; j < nums.length; i++) {
    if (nums[j] < 0) {
      maxSum = 0;
    }
    return maxSum;
  }

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray(nums));

```
