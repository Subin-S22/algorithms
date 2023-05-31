/**
 * This requires queue data structure concepts to do the breath first values
 * @param root
 * @returns
 */
//breath first values
const breathFirstValues = (root: any) => {
  //null condition
  if (root === null) return [];
  //to go across
  const queue = [root];
  const values: any[] = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.val) {
      values.push(current.val);
    }

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values;
};

//this cannot or hard to do in recursive way because
//recursive uses call stack behind, this problem require queue to implement

export default breathFirstValues;
