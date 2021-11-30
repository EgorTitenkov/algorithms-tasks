export function uniqueSum(arr: Array<number>): number {
  const [...setFromArr] = new Set(arr)
  return [...setFromArr].reduce((acc: number, value: number) => {
    return acc + value
  })
}

// const arr6: Array<number> = [1, 2, 3, 3, 4, 5]
// console.log(uniqueSum(arr6))
