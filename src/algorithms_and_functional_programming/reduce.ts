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