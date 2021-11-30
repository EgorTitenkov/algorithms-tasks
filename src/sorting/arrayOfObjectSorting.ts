export function arrayOfObjectSorting(list: Array<{}>, sortBy: string) {
  const newList = list.filter((obj) => obj.hasOwnProperty(sortBy))
  const leftovers = list.filter((n) => newList.indexOf(n) === -1)
  return newList.sort((a, b) => b[sortBy] - a[sortBy]).concat(leftovers)
}

// const obj = [
//    { a: 1, b: 3 },
//    { a: 3, b: 2 },
//    { a: 2, b: 40 },
//    { a: 4, b: 12 },
// ]

// console.log(arrayOfObjectSorting(obj, 'a'))
