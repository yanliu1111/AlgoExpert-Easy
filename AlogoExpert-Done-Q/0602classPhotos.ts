//O(nlogn) time
//blue and red : 2[nlogn]+n => n<nlogn  => assum that n=nlogn => 3nlogn => nlogn; rule is remove constant3 and remove addition n
//O(1) space

export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const redShirtInFront = redShirtHeights[0] < blueShirtHeights[0];
  if (redShirtInFront) {
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
      if (redShirtHeights[idx] >= blueShirtHeights[idx]) return false;
    }
  } else {
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
      if (redShirtHeights[idx] <= blueShirtHeights[idx]) return false;
    }
  }
  return true;
}
