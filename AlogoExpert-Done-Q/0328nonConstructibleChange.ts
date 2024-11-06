// Non-Constructible Change
// coin > currentMax + 1 means we cannot create the minmum amount
// 0 (nlogn) time | constant space 0(1) space
export function nonConstructibleChange(coins: number[]) {
  coins.sort((a: number, b: number) => a - b);
  let currentMax = 0;
  for (const coin of coins) {
    if (coin > currentMax + 1) return currentMax + 1;
    currentMax += coin;
  }

  return currentMax + 1;
}
