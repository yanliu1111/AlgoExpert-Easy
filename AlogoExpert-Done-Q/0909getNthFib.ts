//nthFibonacci
// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.
// time O(n) | space O(n)
// const fibonacciCache = [0, 1];
// export function getNthFib(n: number): number {
//   if (n === 1) return fibonacciCache[0];
//   if (n === 2) return fibonacciCache[1];
//   if (fibonacciCache[n - 1]) return fibonacciCache[n - 1];
//   fibonacciCache[n - 1] = getNthFib(n - 1) + getNthFib(n - 2);
//   return fibonacciCache[n - 1];
// }

// solution3
// time O(n) | space O(n)
interface Memo {
  [key: number]: number;
}

export function getNthFib(n: number, memo: Memo = { 1: 0, 2: 1 }) {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
    return memo[n];
  }
}
