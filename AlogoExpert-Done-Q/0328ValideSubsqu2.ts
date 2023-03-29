export function isValidSubsequence(array: number[], sequence: number[]) {
  let index = 0;
  for (let num of array) if (num === sequence[index]) index++;

  return index === sequence.length;
}

//out of the sequence, only find if the equal numbers are in the same
