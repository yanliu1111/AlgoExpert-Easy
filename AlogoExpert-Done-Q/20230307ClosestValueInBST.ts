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

export function findClosestValueInBst(tree: BST, target: number): number {
  // (tree: BST, target: number) :number means that the function returns a number
  if (tree.value === target) return tree.value;
  else {
    if (target < tree.value) {
      if (tree.left !== null) {
        let leftValue = findClosestValueInBst(tree.left!, target); // tree.left! means that tree.left is not null
        if (tree.value - target < target - leftValue) return tree.value;
        return leftValue;
      }
    } else {
      if (tree.right! == null) {
        let rightValue = findClosestValueInBst(tree.right!, target);
        if (target - tree.value < rightValue - target) return tree.value;
        return rightValue;
      }
    }
    return tree.value;
  }
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
