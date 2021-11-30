export function reduce<T>(
  arr: Array<T>,
  reducer: (value: T, currentValue: T, index?: number, array?: Array<T>) => T,
  initialValue: T
): T {
  let value = initialValue
  const result = arr.map((currentValue) => {
    return (value = reducer(value, currentValue, arr.indexOf(currentValue), arr))
  })
  return result[result.length - 1]
}

// console.log(reduce(["1", "2", "2", "4"], (acc, value) => acc + value, "1"))
