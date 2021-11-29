export function arrayOfObjectSorting(list: Array<{}>, sortBy: string) {
   return list.sort(function (a, b) {
      if (sortBy) {
         return b[sortBy] - a[sortBy]
      }
   })
}

// const obj = [
//    { a: 1, b: 3 },
//    { a: 3, b: 2 },
//    { a: 2, b: 40 },
//    { a: 4, b: 12 },
// ]

// console.log(arrayOfObjectSorting(obj, 'a'))
