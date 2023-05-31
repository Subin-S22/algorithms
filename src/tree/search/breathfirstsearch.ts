//breath first search with queue
const breathfirstsearch = (root: any, target: any) => {
  //null check
  if (!root) return false;

  const queue = [root];
  //while loop
  while (queue.length > 0) {
    const current = queue.shift();
    //check val is equal to target
    if (current.val === target) return true;

    //pushing the right and left to queue if that exist.
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};
