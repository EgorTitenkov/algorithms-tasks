const defaultValue = 0

export function reduce(
   arr: Array<number>,
   reducer: (value: number, currentValue: number, index?: number, array?: Array<any>) => number,
   initialValue: number,
) : number {
   let value = initialValue
   const result = arr.map((currentValue) => (value = reducer(value, currentValue)))
   return result[result.length - 1]
}

console.log(reduce([1, 2, 3, 4], (acc: number, value: number) => acc * value, 1))
