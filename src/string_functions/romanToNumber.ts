export function toArabic(romanNumber: string): number {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  }
  const arrNums = romanNumber.split('').map((el) => map[el])
  return arrNums.reduce((sum: number, cur: number, i: number, a: Array<number>) => {
    if (cur < a[i + 1]) return sum - cur
    return sum + cur
  }, 0)
}