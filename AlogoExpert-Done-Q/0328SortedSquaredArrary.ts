// Sorted Squared Array
export function sortedSquaredArray(array: number[]) {
  let result: number[] = [];
  for (let num of array) result.push(num * num);
  return result.sort((a, b) => a - b);
}

console.log(sortedSquaredArray([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
//a - b is a function that returns a positive number if a > b, a negative number if a < b, and 0 if a = b.
