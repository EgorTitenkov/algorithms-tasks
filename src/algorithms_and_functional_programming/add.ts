function add(n: number) {
   return function (y: number) {
      return n + y
   }
}

const add2 = add(2)
const add6 = add(6)

console.log(add2(5))
console.log(add6(5))
