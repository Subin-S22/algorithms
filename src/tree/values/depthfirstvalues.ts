//with while
const depthFirstValues = (root: any) => {
  //if the root is null - which is also a binary tree
  if (root === null) return [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return stack;
};

//recursion

const recursionDepth = (root: any) => {
  if (!root) return null;

  const left: any = recursionDepth(root.left);
  const right: any = recursionDepth(root.right);

  return [root.val, ...left, ...right];
};
