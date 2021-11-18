function reduce(arr: Array<number>, reducer: Function, initialValue: number) {
   let value = initialValue
   const result = arr.map((currentValue) => (value = reducer(value, currentValue)))
   return result[result.length - 1]
}

console.log(reduce([1, 2, 3, 4], (acc: number, value: number) => acc * value, 1))
