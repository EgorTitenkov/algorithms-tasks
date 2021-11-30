export function multiplyAll(
  arr: Array<number>
): (multiplier: number) => number[] {
  return function (multiplier) {
    return arr.map((num) => {
      return num * multiplier
    })
  }
}

// const arr5 = [1, 5, 7, 8, 2, 3]
// console.log(multiplyAll(arr5)(2))
