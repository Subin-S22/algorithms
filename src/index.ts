import insertionsort from "./sorting/insertionsort";
import bubblesort from "./sorting/bubbleSort";
import mergeSort from "./sorting/mergesort";
import examples from "./examples";
import LinkedList from "./linkedList";
const ll = new LinkedList();
ll.insertAtFirst(100);
ll.insertAtFirst(200);
ll.insertAtFirst(300);
// ll.deleteAtIndex(0);
ll.reverse();
ll.printNode();

const sum: any = (arr: number[]) => {
  if (arr.length === 0) return 0;

  return arr.shift() + sum(arr);
};

console.log(sum([1, 2, 3, 4, 5]));
