// Two methods: recursively and iteration
// This is iteration -1, I dont write recursive method, and here is recursively method cost, which need build a helper funtion in beginning, then call the helper method recursively.
// instead the first one, we keep track of the current node we are exploring in a variable, so the second one has constant space we are using, we only store two variables current node and the closest variable.
// Time: Avg: O(log(N)) for BST, Space:O(log(N)) algorithm iteratively
// Time: one branch, worst: O(N), Space: O(N)
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
