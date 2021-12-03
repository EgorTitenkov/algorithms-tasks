export function uniqueSum(arr: Array<number>): number {
  const [...setFromArr] = new Set(arr)
  return [...setFromArr].reduce((acc: number, value: number) => {
    return acc + value
  })
}
