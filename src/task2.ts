let arr2:Array<number>= [3,2,6,8,2,3,5,6,7,4,12,52,2]

function maxTripletSum(arr:Array<number>){
    const uniqueArr = createUniqueArr(arr)
    const sortedArr = uniqueArr.sort((a,b) => a - b)
    const threeMaxNums = sortedArr.slice(sortedArr.length-3,sortedArr.length)
    const resultSum = threeMaxNums.reduce((acc,value) => acc + value)
    return resultSum
}

function createUniqueArr(arr:Array<number>){
    let uniqueArr:Array<number> = []
    for(let num of arr) {
        if (!uniqueArr.includes(num)){
            uniqueArr.push(num)
        }
    }
    return uniqueArr
}

console.log(maxTripletSum(arr2))