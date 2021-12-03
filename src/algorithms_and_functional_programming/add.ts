export function add(n: number): (y: number) => number {
  return function (y) {
    return n + y
  }
}