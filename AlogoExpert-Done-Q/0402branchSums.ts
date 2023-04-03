// Branch Sums
// O(n) time | O(n) space

// method 1
// class BinaryTree {
//   value: number;
//   left: BinaryTree | null;
//   right: BinaryTree | null;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function is_leaf(node: BinaryTree): boolean {
//   return !node.left && !node.right;
// }

// export function branchSums(root: BinaryTree): number[] {
//   const sums: number[] = [];
//   sumBranch(root, sums);

//   return sums;
// }

// function sumBranch(
//   node: BinaryTree | null,
//   sums: number[],
//   currentSum: number = 0
// ): void {
//   if (!node) return;
//   currentSum += node.value;
//   if (is_leaf(node)) {
//     sums.push(currentSum);
//     return;
//   }
//   sumBranch(node.left, sums, currentSum);
//   sumBranch(node.right, sums, currentSum);
// }

// method 2
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  return calcBranch(root);
}

function calcBranch(node: BinaryTree, runningSum = 0, sums: number[] = []) {
  if (!node) return sums;
  runningSum += node.value;
  if (node.left === null && node.right === null) sums.push(runningSum);
  if (node.left) calcBranch(node.left, runningSum, sums);
  if (node.right) calcBranch(node.right, runningSum, sums);
  return sums;
}
console.log(
  branchSums({
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: null,
      },
    },
    right: {
      value: 3,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  })
);
