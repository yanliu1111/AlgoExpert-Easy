//minimum waiting time
// sort --> o(nlog(n))
//time complexity O(nlogn), space complexity O(1)
export function minimumWaitingTime(queries: number[]) {
  const timingMap: Record<string, number> = {
    lastSum: 0,
    queryTime: 0,
  };

  queries
    .sort((a: number, b: number) => a - b)
    .forEach((num: number) => {
      timingMap.queryTime += timingMap.lastSum;
      timingMap.lastSum += num;
    });

  return timingMap.queryTime;
}
// 1+2+2+3+6, 0 index,(1)*4 + (2)*(3) + 2 * (2) + 3 * (1)
