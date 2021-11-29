export function sumAverage(arr: Array<Array<number>>): number {
   const averageSum = arr
      .map((innerArr) => {
         return innerArr.reduce((acc, value) => acc + value) / innerArr.length
      })
      .reduce((acc, value) => acc + value)
   return Math.floor(averageSum)
}

// const arr: Array<number>[] = [
//    [1, 2, 3.5, 4],
//    [1, 2.5, 5.3],
//    [0.5, 0.6, 2],
// ]
// console.log(sumAverage(arr))
