// remove export
// function sortedSquaredArray(array: number[]) {
//   let start = 0;
//   let end = array.length - 1;
//   let squareNums = [];
//   let numbersToBeSquaredCount = array.length;
//   while (numbersToBeSquaredCount > 0) {
//     if (Math.abs(array[start]) > Math.abs(array[end])) {
//       const square = Math.pow(array[start], 2);
//       squareNums.unshift(square);
//       start++;
//       console.log("!!", squareNums);
//     } else {
//       const square = Math.pow(array[end], 2);
//       squareNums.unshift(square);
//       end--;
//       console.log("??", squareNums);
//     }
//     numbersToBeSquaredCount--;
//   }
//   return squareNums;
// }
// console.log(sortedSquaredArray([-1, 0, 2]));

// function nonConstructibleChange(coins: number[]) {
//   coins.sort((a: number, b: number) => a - b);
//   let currentMax = 0;
//   for (const coin of coins) {
//     if (coin > currentMax + 1) return currentMax + 1;
//     currentMax += coin;
//   }

//   return currentMax + 1;
// }
// console.log(nonConstructibleChange([1, 2, 4, 5]));

let nums = [10, -3, 5, -1, 0, 2, 3];
let sorter = (a: number, b: number) => {
  console.log(a, b, a - b);
  return a - b;
};
let x = nums.sort(sorter);
console.log(x);
