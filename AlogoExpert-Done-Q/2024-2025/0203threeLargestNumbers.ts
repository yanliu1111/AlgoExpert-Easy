export function findThreeLargestNumbers(array: number[]) {
  const result: number[] = [];

  for (const num of array) {
    if (result.length < 3) result.push(num);
    else if (result[0] < num) result[0] = num;

    result.sort((a, b) => a - b);
  }

  return result;
}
