export function minimumWaitingTime(queries: number[]) {
  let nextSum = 0;
  let totalWaitingTime = 0;

  queries.sort((a, b) => a - b);
  for (let i = 0; i < queries.length - 1; i++) {
    nextSum += queries[i];
    totalWaitingTime += nextSum;
  }
  return totalWaitingTime;
}
