function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const adjustedMap = new Map<number, number>();
  // Map<number, number>() is a generic type, it takes two arguments, the first is the key type, the second is the value type. In this case, the key is a number, and the value is also a number. why <>? because it's a generic type, it's a type that can be used in different ways. In this case, we're using it to create a map that takes a number as a key and a number as a value.what is key? key is the index of the array, value is the value of the array. test
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
