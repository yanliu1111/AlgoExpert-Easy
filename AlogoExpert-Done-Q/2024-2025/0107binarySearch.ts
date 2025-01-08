export function binarySearch(array: number[], target: number): number {
  let left: number = 0;
  let right: number = array.length - 1;
  let middle: number
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

// function binarySearch(array: number[], target: number): number , number means the return type of the function
// time complexity is O(log(n)) where n is the length of the array
// space complexity is O(1) because we are not using any extra space