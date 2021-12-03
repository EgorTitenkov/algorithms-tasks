export function sumAverage(arr: Array<Array<number>>): number {
  const averageSum = arr
    .map((innerArr) => {
      return innerArr.reduce((acc, value) => acc + value) / innerArr.length
    })
    .reduce((acc, value) => acc + value)
  return Math.floor(averageSum)
}
