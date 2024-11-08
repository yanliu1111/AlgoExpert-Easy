// Second iteration method
// Time: Avg: O(log(N)) for BST, Space:O(1) algorithm iteratively
// Time: one branch, worst: O(N), Space: O(1)
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findClosestValueInBst(tree: BST, target: number) {
  let closes: number = Infinity;
  let curr: BST | null = tree;

  while (curr) {
    const currDistance: number = Math.abs(curr.value - target);
    const prevDistance: number = Math.abs(closes - target);
    if (currDistance < prevDistance) closes = curr.value;
    if (currDistance === 0) break;

    curr = curr.value < target ? curr.right : curr.left;
  }
  return closes;
}
