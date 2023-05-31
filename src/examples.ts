function fib(arr: Array<number>) {
  const set = new Set(arr);

  console.log(set.entries());
  console.log(set.size);
}

export default fib;
