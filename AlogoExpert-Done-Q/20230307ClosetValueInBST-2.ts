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
  let closest = tree.value;
  let currentNode: BST | null = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }

  return closest;
}
console.log(
  findClosestValueInBst(
    {
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 15, left: null, right: null },
    },
    12
  )
);
