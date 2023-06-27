const findSmallestDifferent = (array) => {
  const n = array.length;
  const subsetSize = Math.floor(n / 2);
  let smallestDifferent = Infinity;
  let validSubsets = [];

  const generateCombinations = (arr, size, start, subset) => {
    if (subset.length === size) {
      validSubsets.push([...subset]);
      return;
    }

    for (let i = start; i < n; i++) {
      subset.push(arr[i]);
      generateCombinations(arr, size, i + 1, subset);
      subset.pop();
    }
  };

  generateCombinations(array, subsetSize, 0, []);

  let validGroups = [];
  for (let i = 0; i < validSubsets.length; i++) {
    const subset = validSubsets[i];
    const remaining = array.filter((num) => !subset.includes(num));
    const diff = Math.abs(
      subset.reduce((a, b) => a + b) - remaining.reduce((a, b) => a + b)
    );
    if (diff <= smallestDifferent) {
      validGroups.push({
        group1: [...subset],
        group2: [...remaining],
        difference: diff,
      });
      smallestDifferent = diff;
    }
  }
  return validGroups;
};

console.log(findSmallestDifferent([1, 2, 3, 4, 5]));
