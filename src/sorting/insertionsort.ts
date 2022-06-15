import swap from "../../helpers/swap";
import help from "../../helpers/_index";

function insertionsort(arr: Array<number>) {
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    let j = i;
    let temp = arr[i];
    while (j > 0 && help.compare(arr[j - 1], temp) === help.COMP.GREATER) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

export function myversion(arr: Array<number>) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && help.compare(arr[j - 1], arr[j]) === help.COMP.GREATER) {
      swap(arr, j - 1, j);
      j--;
    }
  }
  return arr;
}

export default insertionsort;
