import { describe, it, expect } from "vitest";
import { findUnsortedWindow } from "../problems/1.2locatSmallestWindow";

describe("findUnsortedWindow", () => {
  it("should return the correct bounds for a small unsorted window", () => {
    const arr = [3, 7, 5, 6, 9];
    expect(findUnsortedWindow(arr)).toEqual([1, 3]);
  });

  it("should return null for an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findUnsortedWindow(arr)).toBeNull();
  });

  it("should return the entire array for a completely unsorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    expect(findUnsortedWindow(arr)).toEqual([0, 4]);
  });

  it("should handle an array with one unsorted element at the beginning", () => {
    const arr = [2, 1, 3, 4, 5];
    expect(findUnsortedWindow(arr)).toEqual([0, 1]);
  });

  it("should handle an array with one unsorted element at the end", () => {
    const arr = [1, 2, 3, 5, 4];
    expect(findUnsortedWindow(arr)).toEqual([3, 4]);
  });

  it("should handle an array with duplicate elements", () => {
    const arr = [1, 3, 2, 2, 4, 5];
    expect(findUnsortedWindow(arr)).toEqual([1, 3]);
  });

  it("should handle a single element array", () => {
    const arr = [1];
    expect(findUnsortedWindow(arr)).toBeNull();
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    expect(findUnsortedWindow(arr)).toBeNull();
  });

  it("should handle an array with all identical elements", () => {
    const arr = [2, 2, 2, 2];
    expect(findUnsortedWindow(arr)).toBeNull();
  });

  it("should return correct bounds for multiple scattered unsorted elements", () => {
    const arr = [1, 5, 3, 4, 2, 6];
    expect(findUnsortedWindow(arr)).toEqual([1, 4]);
  });
});
