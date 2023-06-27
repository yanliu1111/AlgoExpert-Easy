const findSmallestDifferent = (array) => {
  const n = array.length;
  const subsetSize = Math.floor(n / 2); // the size of subset
  let smallestDifferent = Infinity; // Infinity is a numeric value that represents positive infinity.
  let validSubsets = [];

  // generate all possible subsets except empty set and one element set
  // when I set array in the function, subsetSize, start, subset, it will be array = [1, 2, 3, 4, 5], size = 2, start = 0, subset = []
  const generateCombinations = (arr, size, start, subset) => {
    if (subset.length === size) {
      validSubsets.push([...subset]); // Store a copy of the current subset in validSubsets
      return;
    }

    for (let i = start; i < n; i++) {
      subset.push(arr[i]);
      generateCombinations(arr, size, i + 1, subset);
      subset.pop();
    }
  };

  generateCombinations(array, subsetSize, 0, []);

  // itertate through validSubsets, and find the smallest difference
  let validGroup1 = [];
  let validGroup2 = [];
  for (let i = 0; i < validSubsets.length; i++) {
    const subset = validSubsets[i];
    const remaining = array.filter((num) => !subset.includes(num));
    const diff = Math.abs(
      subset.reduce((a, b) => a + b) - remaining.reduce((a, b) => a + b)
    );
    if (diff <= smallestDifferent) {
      validGroup1.push([...subset]);
      validGroup2.push([...remaining]);
      smallestDifferent = diff;
    }
  }
  return {
    group1: validGroup1,
    group2: validGroup2,
    difference: smallestDifferent,
  };
};

console.log(findSmallestDifferent([1, 2, 3, 4, 5]));
