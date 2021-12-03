export function spread(this: void, callback: (a: number, b: number) => number, arr: any): number {
  return callback.apply(this, arr)
}