export function nonConstructibleChange(coins: number[]) {
  let currentTotal = 1;
  for (let coin of coins.sort((a, b) => a - b))
    if (coin > currentTotal) return currentTotal;
    else currentTotal += coin;
  return currentTotal;
}
