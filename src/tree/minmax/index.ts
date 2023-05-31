//min
const Iminvales = (root: any) => {
  if (!root) return 0;

  let smallest = Infinity;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    return smallest;
  }
};

//min recursive

const Rminvale: any = (root: any) => {
  if (!root) return Infinity;

  return Math.min(root.val, Rminvale(root.left), Rminvale(root.right));
};
