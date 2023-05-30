// This is an input class. Do not edit.
// time complexity O(n), space complexity O(h)

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function evaluateExpressionTree(tree: BinaryTree | null): number {
  // Handle null case
  if (tree === null) {
    return 0;
  }

  switch (tree.value) {
    case -1:
      return (
        evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
      );
    case -2:
      return (
        evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
      );
    case -3:
      const div =
        evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right);
      return div > 0 ? Math.floor(div) : Math.ceil(div);
    case -4:
      return (
        evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right)
      );
    default:
      return tree.value;
  }
}
