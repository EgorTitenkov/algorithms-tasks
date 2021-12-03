export function multiplyAll(arr: Array<number>): (multiplier: number) => Array<number> {
  return function (multiplier) {
    return arr.map((num) => {
      return num * multiplier
    })
  }
}

