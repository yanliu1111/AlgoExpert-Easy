// Time Complexity: O(n), space complexity: O(h) h is the height of the tree
// export function nodeDepths(
//   tree: BinaryTree | null,
//   runningDepthTotal: number = 0
// ): number {
//   if (tree === null) return 0;
//   return (
//     runningDepthTotal +
//     nodeDepths(tree.left, runningDepthTotal + 1) +
//     nodeDepths(tree.right, runningDepthTotal + 1)
//   );
// }

// time complexity: O(n), space complexity: O(h)
export function nodeDepths(root: BinaryTree) {
  let result = 0;
  function dfs(rootNode: BinaryTree | null, cDepth: number) {
    if (rootNode === null) return;
    result += cDepth;
    dfs(rootNode.left, cDepth + 1);
    dfs(rootNode.right, cDepth + 1);
  }
  dfs(root, 0);
  return result;
}

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
