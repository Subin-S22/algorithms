import help from "../../helpers/_index";

function selectionsort(arr: Array<number>) {
  const { length } = arr;

  //take minimum value and swap
  let minNumberIndex: number;
  for (let i = 0; i < length; i++) {
    minNumberIndex = i;
    for (let j = i; j < length; j++) {
      if (help.compare(arr[minNumberIndex], arr[j]) === help.COMP.GREATER) {
        minNumberIndex = j;
      }
    }
    if (i !== minNumberIndex) {
      help.swap(arr, i, minNumberIndex);
    }
  }
  return arr;
}

export default selectionsort;
