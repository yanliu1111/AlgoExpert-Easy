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

//20241112, this question iterative approach and how the recursive approach are gonne work.
// recursive approach is nicer than iterative approach, because as with many binary tree questions,recursive is clean
// you can write out the algorithm in a couple of lines. Even the iterative approach does work, recursive is better.
// wheneverr recursive is call on a particular node, we're gonna sum of the depth of the node plus the return value
// of calls to the recurive function on the two children nodes of the particular node. recursive function f(n, d) deepth of the nodes -> f(n, d) = d + f(l, d+1) + f(r, d+1) l means left, r means rigth.

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
