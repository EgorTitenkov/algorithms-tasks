export function biggest(arr: Array<number>) {
   const sortedArr = arr.sort().reverse()
   const penultimateNum = sortedArr[sortedArr.length - 2].toString().split('')
   const lastDigit = penultimateNum[penultimateNum.length - 1]
   const lastNum = sortedArr[sortedArr.length - 1]
   if (+lastDigit < lastNum) {
      let temp = +lastDigit
      sortedArr[sortedArr.length - 2] = lastNum
      sortedArr[sortedArr.length] = temp
   }
   const biggestNum: string = sortedArr.reduce((acc, value) => acc + value, '')
   return biggestNum
}

// let arr3: Array<number> = [3, 30, 34, 5, 9]
// console.log(biggest(arr3))
