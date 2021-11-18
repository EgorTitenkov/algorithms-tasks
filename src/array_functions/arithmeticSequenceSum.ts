function arithmeticSequenceSum(num: number, value: number, elementsCount: number) {
   const arr: Array<number> = []
   let newArr: Array<number> = []
   newArr.push(num)
   newArr = arr.map((element) => {
      const el = num + value * arr.indexOf(element)
      return el
   })
   const arithmeticSum: number = newArr.reduce((acc, value) => acc + value)
   return arithmeticSum
}

console.log(arithmeticSequenceSum(2, 3, 5))
