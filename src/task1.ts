const arr :Array<number>[] = [[1,2,3.5,4],[1,2.5,5.3],[0.5,0.6,2]]

function sumAverage(arr:Array<Array<number>>){
    const averageSum= averageValueArr(arr)
    const result:number = Math.floor(averageSum)
    return result
}

function averageValueArr(arr: Array<Array<number>>){
    const averageValueArr = arr.map((innerArr) => {
        return innerArr.reduce((acc,value) => acc + value) / innerArr.length
    })
    return averageSumValue(averageValueArr)
}

function averageSumValue(averageValueArr:Array<number>){
    const averageSum = averageValueArr.reduce((acc,value) => acc + value)
    return averageSum
}

console.log(sumAverage(arr))