export const compose = (...fns: Array<(num: number) => number>)  =>
  fns.reduce((f, g) => (num: number)  : number =>  f(g(num)))
