function spread(this: void, callback: Function, arr: Array<number>) {
   return callback.apply(this, arr)
}

console.log(spread((a: number, b: number) => a + b, [5, 2]))
