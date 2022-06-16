import help from "../../helpers/_index";
function mergeSort(arr: Array<number>) {
  if (arr.length > 1) {
    const { length } = arr;
    const middle = Math.floor(length / 2);
    const left = mergeSort(arr.slice(0, middle));
    console.log(left);

    const right = mergeSort(arr.slice(middle, length));
    arr = merge(left, right);
  }
  return arr;
}

function merge(left: Array<number>, right: Array<number>) {
  let i = 0;
  let j = 0;
  const result: number[] = [];
  while (i < left.length && j < right.length) {
    result.push(
      help.compare(left[i], right[j]) === help.COMP.LESSER
        ? left[i++]
        : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export default mergeSort;
