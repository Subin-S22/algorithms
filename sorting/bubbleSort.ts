import compare, { COMP } from "../helpers/compare";
import swap from "../helpers/swap";

function bubblesort(arr: Array<number>) {
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) === COMP.GREATER) {
        swap(arr, j, j + 1);
      }
    }
  }
}

export default bubblesort;
