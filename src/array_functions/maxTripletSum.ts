export function maxTripletSum(arr: Array<number>) : number{
   const [...setFromArr] = new Set(arr)
   return [...setFromArr]
      .sort((a, b) => a - b)
      .slice([...setFromArr].length - 3, [...setFromArr].length)
      .reduce((acc, value) => acc + value)
}

// let arr2: Array<number> = [3, 2, 6, 8, 2, 3, 5, 6, 7, 4, 12, 52, 2]
// console.log(maxTripletSum(arr2))
