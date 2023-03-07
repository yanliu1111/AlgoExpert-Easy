function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const adjustedMap = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    adjustedMap.set(targetSum - array[i], i);
  }
  for (let i = 0; i < array.length; i++) {
    const elem = array[i];

    if (adjustedMap.has(elem)) {
      const mappedIndex = adjustedMap.get(elem);
      if (mappedIndex == i) continue;

      return [elem, targetSum - elem];
    }
  }
  return [];
}

// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
