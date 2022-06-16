import help from "../../helpers/_index";

function bubblesort(arr: Array<number>) {
  const { length } = arr;

  //for loop through all values
  for (let i = 0; i < length; i++) {
    //for loop which depends on the i
    for (let j = 0; j < length - 1 - i; j++) {
      if (help.compare(arr[j], arr[j + 1]) === help.COMP.GREATER) {
        help.swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

export default bubblesort;
