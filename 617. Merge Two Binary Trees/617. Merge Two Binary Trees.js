
// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  function merge(l1, l2, i) {
    // console.log(l1, l2, i)
    if (l1 && l2) {
      const newNode = new TreeNode(t1.val + t2.val);

      newNode.left = mergeList(l1.left, l2.left);
      newNode.right = mergeList(l1.right, l2.right);

      return newNode;
    }
    return l1 || l2;
  }

  const head = merge(t1, t2, 0)
  // console.log(head)
  return head
};