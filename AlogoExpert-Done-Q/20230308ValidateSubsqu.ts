//Validate Subsequence

export function isValidaSubsequence(array: number[], sequence: number[]) {
  //sequence is a subsequence of array if all the elements in sequence are in array in the same order, for example: [1,3,4] is a subsequence of [1,2,3,4] but [1,4,3] is not
  for (let i = array.length - 1; i >= 0; i--) {
    if (sequence[sequence.length - 1] === array[i]) {
      sequence.pop(); //pop() removes the last element from an array and returns that element
    }
  }
  return sequence.length === 0; //!sequence.length; if sequence.length is 0, it is false, so !sequence.length is true
}

console.log(isValidaSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
