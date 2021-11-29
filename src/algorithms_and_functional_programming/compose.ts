export const compose = (...fns: Array<(num: number) => number>) =>
   fns.reduce((f, g) => (num: number) => f(g(num)))

// console.log(compose(Math.sin, Math.sqrt, Math.floor)(4.2))
