export function biggest(nums: Array<number>) {
  return (
    nums
      .map((num) => num.toString())
      .sort((a: any, b: any) => b + a - (a + b))
      .join('')
      .replace(/^0+/, '') || '0'
  )
}

// let arr3: Array<number> = [3, 30, 34, 5, 9]
// console.log(biggest(arr3))
