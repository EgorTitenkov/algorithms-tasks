// const arr4: Array<Array<number>> = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
// console.log(flattenAndSort(arr4))

export function flattenAndSort(
  arr: Array<Array<number>>
): Array<Array<number>> {
  return [].concat(...arr).sort()
}
