const compose = (...fns: Array<Function>) => fns.reduce((f, g) => (num: number) => f(g(num)))

console.log(compose(Math.sin, Math.sqrt, Math.floor)(4.2))
