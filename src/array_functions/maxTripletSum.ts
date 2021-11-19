let arr2: Array<number> = [3, 2, 6, 8, 2, 3, 5, 6, 7, 4, 12, 52, 2]

function maxTripletSum(arr: Array<number>) {
   const setFromArr = new Set(arr)
   const uniqueArr = [...setFromArr]
   const sortedArr = uniqueArr.sort((a, b) => a - b)
   const threeMaxNums = sortedArr.slice(sortedArr.length - 3, sortedArr.length)
   const resultSum: number = threeMaxNums.reduce((acc, value) => acc + value)
   return resultSum
}

console.log(maxTripletSum(arr2))
