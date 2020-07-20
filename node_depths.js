// to calculate how the node depths, recursively call the function and each time it 

function nodeDepths(root, depth = 0) {
    if(root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
  }