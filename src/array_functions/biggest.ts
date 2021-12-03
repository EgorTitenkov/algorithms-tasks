export function biggest(nums: Array<number>): string {
  return (
    nums
      .map((num) => num.toString())
      .sort((a: any, b: any) => b + a - (a + b))
      .join('')
      .replace(/^0+/, '') || '0'
  )
}
