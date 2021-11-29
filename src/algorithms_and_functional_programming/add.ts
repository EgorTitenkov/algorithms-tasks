export function add(n: number) : (y: number) => number {
   return function (y){
      return n + y
   }
}

// const add2 = add(2)
// const add6 = add(6)
// console.log(add2(5))
// console.log(add6(5))
