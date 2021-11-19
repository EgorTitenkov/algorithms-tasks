const obj = [
   { a: 1, b: 3 },
   { a: 3, b: 2 },
   { a: 2, b: 40 },
   { a: 4, b: 12 },
]

function arrayOfObjectSorting(list: Array<object>, sortBy: string) {
   return list.sort(function (a, b) {
      return b[sortBy] - a[sortBy]
   })
}

console.log(arrayOfObjectSorting(obj, 'a'))
