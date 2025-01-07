type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth: number = 1): number {
  return array.reduce((sum: number, currentElement: number | SpecialArray) => {
    if (Array.isArray(currentElement)) {
      const nextLevelDepth = depth + 1;
      return sum + productSum(currentElement, nextLevelDepth) * nextLevelDepth;
    }
    return sum + currentElement;
  }, 0) as number;
}
