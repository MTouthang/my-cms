// cross check with 1.2locatSmallestWindow.ts

const arr = [1, 2, 5, 10, 3];

// difference between this
const sortedArr = [...arr].sort((a, b) => a - b);

// and this
const sortedArr1 = arr.sort((a, b) => a - b);
