"use strict";
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
function sortedSquaredArray(array) {
    let start = 0;
    let end = array.length - 1;
    let squareNums = [];
    let numbersToBeSquaredCount = array.length;
    while (numbersToBeSquaredCount > 0) {
        if (Math.abs(array[start]) > Math.abs(array[end])) {
            const square = Math.pow(array[start], 2);
            squareNums.unshift(square);
            start++;
        }
        else {
            const square = Math.pow(array[end], 2);
            squareNums.unshift(square);
            end--;
        }
        numbersToBeSquaredCount--;
    }
    return squareNums;
}
console.log(sortedSquaredArray([-1, 0, 2, 4, 5]));
