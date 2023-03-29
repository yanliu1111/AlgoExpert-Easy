// Sorted Squared Array
export function sortedSquaredArray(array: number[]) {
  let start = 0;
  let end = array.length - 1;
  let squareNums = [];
  let numbersToBeSquaredCount = array.length;
  while (numbersToBeSquaredCount > 0) {
    if (Math.abs(array[start]) > Math.abs(array[end])) {
      const square = Math.pow(array[start], 2);
      squareNums.unshift(square);
      //unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
      //?? can I do step by step debugging in VSCode?
      start++;
    } else {
      const square = Math.pow(array[end], 2);
      squareNums.unshift(square);
      end--;
    }
    numbersToBeSquaredCount--;
  }
  return squareNums;
}
