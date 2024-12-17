// tandemBicycle 20241217
//greedy algorithm
//TIME: O(nlogn) time for sorting,for fast and low speed =O(n) + O(n), if use popular sorting algorithm: merge sort, quick sort, heap sort, most time ending using quick sort.
//n+n+nlgn=O(nlogn)
//SPACE: O(1) constant space; if use merge sort, O(2n) = O(n)
//ask about build-in method, reverse the array
export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  let totalSpeed = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

  for (let i = 0; i < redShirtSpeeds.length; i++)
    totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  return totalSpeed;
}
