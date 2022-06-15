export enum COMP {
  EQUAL = 0,
  LESSER = -1,
  GREATER = 1,
}

export default function compare(a: number, b: number) {
  if (a === b) return COMP.EQUAL;
  return a < b ? COMP.LESSER : COMP.GREATER;
}
