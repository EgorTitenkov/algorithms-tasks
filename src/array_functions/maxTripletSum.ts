export function maxTripletSum(arr: Array<number>): number {
  const [...setFromArr] = new Set(arr)
  return [...setFromArr]
    .sort((a, b) => a - b)
    .slice([...setFromArr].length - 3, [...setFromArr].length)
    .reduce((acc, value) => acc + value)
}
