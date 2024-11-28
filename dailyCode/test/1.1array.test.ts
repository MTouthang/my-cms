import { describe, it, expect } from "vitest";
import { getAllProduct } from "../problems/1.1array";

describe("gelAllProduct", () => {
  it("should return correct product array for arr1", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const result = getAllProduct(arr1);
    expect(result).toEqual([120, 60, 40, 30, 24]);
  });

  it("should return correct product array for arr2", () => {
    const arr2 = [3, 2, 1];
    const result = getAllProduct(arr2);
    expect(result).toEqual([2, 3, 6]);
  });

  it("should handle an array with a single element", () => {
    const arr = [5];
    const result = getAllProduct(arr);
    expect(result).toEqual([1]); // Product of array excluding the single element is 1
  });

  it("should handle an array with zero included", () => {
    const arr = [0, 2, 3];
    const result = getAllProduct(arr);
    expect(result).toEqual([6, 0, 0]); // Products involving zero should result in zero
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    const result = getAllProduct(arr);
    expect(result).toEqual([]); // Empty array should return an empty array
  });
});
