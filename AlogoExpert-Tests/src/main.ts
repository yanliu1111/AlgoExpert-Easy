function twoNumberSum(numbers: number[], targetSum: number) {
  const targetSumPairs: number[] = [];

  for (let number of numbers) {
    console.log(number);
    if (targetSumPairs.includes(number)) {
      return [number, targetSum - number];
    }

    targetSumPairs.push(targetSum - number);
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
