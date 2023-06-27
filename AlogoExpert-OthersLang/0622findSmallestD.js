//array = [1, 2, 3, 4, 5] => the results should be group1 [1, 2, 5] group2 [3, 4] difference is 1
//because 1 is the smallest difference,there are two set of groups that have the same difference, so we need to return both of them

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
  for (let i = 0; i < validSubsets.length; i++) {
    const subset = validSubsets[i];
    const remaining = array.filter((num) => !subset.includes(num));
    const diff = Math.abs(
      subset.reduce((a, b) => a + b) - remaining.reduce((a, b) => a + b)
    );
    // if difference is smaller than smallestDifferent, then smallestDifferent = difference
    if (diff < smallestDifferent) {
      smallestDifferent = diff;
    }
  }
  // find the group1 that has the smallest difference
  const group1 = validSubsets.find((subset) => {
    const remaining = array.filter((num) => !subset.includes(num));
    const diff = Math.abs(
      subset.reduce((a, b) => a + b) - remaining.reduce((a, b) => a + b)
    );
    return diff === smallestDifferent;
  });
  // find the group2 that has the smallest difference
  const group2 = array.filter((num) => !group1.includes(num));

  return {
    group1,
    group2,
    difference: smallestDifferent,
  };
};

console.log(findSmallestDifferent([1, 2, 3, 4, 5]));
// { group1: [ 2, 5 ], group2: [ 1, 3, 4 ], difference: 1 }
console.log(findSmallestDifferent([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
/*
{
  group1: [ 1, 2, 5, 9, 10 ],
  group2: [ 3, 4, 6, 7, 8 ],
  difference: 1
}
*/

// working for negative numbers as well
console.log(findSmallestDifferent([-2, -1, 1, 2, 3]));
//{ group1: [ -2, 3 ], group2: [ -1, 1, 2 ], difference: 1 }

console.log(findSmallestDifferent([1, 2, 4, 8]));
//{ group1: [ 1, 8 ], group2: [ 2, 4 ], difference: 3 }

//Best Solution Jun 26, 2023
function findGroups(array) {
  const sortedArray = array.sort((a, b) => a - b); // Sort the array in ascending order
  const result = [];
  let smallestDifference = Number.MAX_SAFE_INTEGER;

  const generateCombinations = (currentIndex, group1, group2) => {
    if (currentIndex === sortedArray.length) {
      const difference = Math.abs(sum(group1) - sum(group2));
      if (difference <= smallestDifference) {
        if (difference < smallestDifference) {
          result.length = 0; // Reset the result array if a smaller difference is found
          smallestDifference = difference;
        }
        result.push({
          group1: group1.slice(), // Store a copy of the current group1 in the result array
          group2: group2.slice(),
          difference,
        });
      }
      return;
    }

    // Include the current element in group1
    group1.push(sortedArray[currentIndex]);
    generateCombinations(currentIndex + 1, group1, group2);
    group1.pop();

    // Include the current element in group2
    group2.push(sortedArray[currentIndex]);
    generateCombinations(currentIndex + 1, group1, group2);
    group2.pop();
  };

  generateCombinations(0, [], []);
  return result;
}

function sum(array) {
  return array.reduce((total, num) => total + num, 0);
}

// Test cases
// const array1 = [1, 1, 1, 1, 10];
// console.log(findGroups(array1));

// const array2 = [1, 2, 3, 4, 5];
// console.log(findGroups(array2));

// const array3 = [-2, -1, 1, 2, 3];
// console.log(findGroups(array3));

// const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findGroups(array4));
