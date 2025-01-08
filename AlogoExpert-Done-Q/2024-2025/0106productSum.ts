type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
// depth is the depth of the array,
export function productSum(array: SpecialArray, depth = 1): number {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1);
    } else {
      sum += element;
    }
  }
  return sum * depth;
}
