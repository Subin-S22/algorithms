//iterative solution
const depthfirstsearch = (root, target) => {
  //null check
  if (!root) return false;

  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val === target) return true;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return false;
};

//recursive solution

const depthFirstSearchRecursive = (root, target) => {
  //null check
  if (!root) return false;
  if (root.val === target) return true;

  return (
    depthFirstSearchRecursive(root.left, target) ||
    depthFirstSearchRecursive(root.right, target)
  );
};
