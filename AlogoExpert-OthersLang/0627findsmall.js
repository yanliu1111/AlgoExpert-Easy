//array = [1, 2, 3, 4, 5] => the results should be group1 [1, 2, 5] group2 [3, 4] difference is 1
// or array = [1,2,3,4,10] => the results should be group1 [1,2,3,4] group2 [10] difference is 0
//because 1, O is the smallest difference,there are two set of groups that have the same difference, so we need to return both of them
// {group1: [1,2,5], group2: [3, 4], difference: 1}
// { group1: [ 1, 2, 3, 4 ], group2: [ 10 ], difference: 0 }
//no average
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

const array = [1, 2, 3, 4, 5];
// const array1 = [1, 1, 1, 1, 10];
console.log(findGroups(array));

//const array2 = [1, 1, 1, 1, 5];
// console.log(findGroups(array2));

// const array3 = [-2, -1, 1, 2, 3];
// console.log(findGroups(array3));

// const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findGroups(array4));
