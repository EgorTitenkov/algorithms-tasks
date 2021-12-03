export const zipWith = (
  fn: (val: number, arr: number) => number,
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> => arr1.slice(0, arr2.length).map((val, idx) => fn(val, arr2[idx]))
