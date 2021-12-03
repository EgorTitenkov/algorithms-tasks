export function arrayOfObjectSorting(list: Array<{}>, sortBy: string) : Array<{}> {
  const newList = list.filter((obj) => obj.hasOwnProperty(sortBy))
  const leftovers = list.filter((n) => newList.indexOf(n) === -1)
  return newList.sort((a, b) => b[sortBy] - a[sortBy]).concat(leftovers)
}
