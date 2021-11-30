export function arithmeticSequenceSum(a: number, r: number, n: number): number {
  return Array(n)
    .fill(a)
    .reduce((sum, v, i) => sum + v + i * r)
}

//console.log(arithmeticSequenceSum(2, 3, 5))
