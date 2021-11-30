export function spread(this: void, callback: (a: number, b: number) => number, arr: any): number {
  return callback.apply(this, arr)
}

// console.log(spread((a: number, b: number) => a + b, [5, 2]))
