import { describe, it, expect } from "vitest";
import { maxSubArray } from "../problems/1.3calculateMaxSubArray";

describe("maxSubArray", () => {
  it("should return the maximum sum for [34, -50, 42, 14, -5, 86]", () => {
    const nums = [34, -50, 42, 14, -5, 86];
    const result = maxSubArray(nums);
    expect(result).toBe(137); // Subarray [42, 14, -5, 86]
  });

  it("should return 0 for an array of all negative numbers [-5, -1, -8, -9]", () => {
    const nums = [-5, -1, -8, -9];
    const result = maxSubArray(nums);
    expect(result).toBe(0);
  });

  it("should return the sum of the entire array for [1, 2, 3, 4]", () => {
    const nums = [1, 2, 3, 4];
    const result = maxSubArray(nums);
    expect(result).toBe(10); // Subarray [1, 2, 3, 4]
  });

  it("should handle mixed positive and negative numbers [-2, 1, -3, 4, -1, 2, 1, -5, 4]", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubArray(nums);
    expect(result).toBe(6); // Subarray [4, -1, 2, 1]
  });

  it("should return 0 for an array of zeros [0, 0, 0]", () => {
    const nums = [0, 0, 0];
    const result = maxSubArray(nums);
    expect(result).toBe(0);
  });

  it("should return the single positive number [100]", () => {
    const nums = [100];
    const result = maxSubArray(nums);
    expect(result).toBe(100);
  });

  it("should return 0 for a single negative number [-100]", () => {
    const nums = [-100];
    const result = maxSubArray(nums);
    expect(result).toBe(0);
  });

  it("should return the correct maximum sum for [5, -1, -2, 3, 6, -1]", () => {
    const nums = [5, -1, -2, 3, 6, -1];
    const result = maxSubArray(nums);
    expect(result).toBe(11); // Subarray [5, -1, -2, 3, 6]
  });

  it("should handle an empty array correctly", () => {
    const nums: number[] = [];
    const result = maxSubArray(nums);
    expect(result).toBe(0); // Edge case for an empty array
  });
});
