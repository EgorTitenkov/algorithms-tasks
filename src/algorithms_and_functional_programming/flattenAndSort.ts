export function flattenAndSort(arr: Array<Array<number>>): Array<Array<number>> {
  return [].concat(...arr).sort()
}
