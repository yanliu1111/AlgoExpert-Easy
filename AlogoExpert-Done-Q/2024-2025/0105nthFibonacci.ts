export function getNthFib(n: number) {
  // The 1st and 2nd fibo numbers
  const lastTwoNumbers = [0, 1];
  let [first, second] = lastTwoNumbers;

  // The counter begins at the third fibo number
  let nthFibo = 3;

  // For this iteration counter will be 3, from next iteration it will be counter + 1
  while (nthFibo++ <= n) {
    // The next fibo number is the sum of prev 2 numbers
    const nextFibNumber = first + second;

    // Change the next number to point to
    first = second;
    second = nextFibNumber;
  }

  // If n is 1 the fibo number is 0 otherwise it is the latest number
  return n > 1 ? second : first;
}