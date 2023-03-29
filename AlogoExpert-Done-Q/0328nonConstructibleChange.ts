// Non-Constructible Change

export function nonConstructibleChange(coins: number[]) {
  coins.sort((a: number, b: number) => a - b);
  let currentMax = 0;
  for (const coin of coins) {
    if (coin > currentMax + 1) return currentMax + 1;
    currentMax += coin;
  }

  return currentMax + 1;
}
