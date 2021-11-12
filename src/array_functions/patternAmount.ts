function patternAmount(num: number) {
    const arr = fillArray(num)
    const combinationArr = makeCombinationArray(arr)
    combinationArr.unshift(arr.join(""))
    return combinationArr
}

function fillArray(num: number) {
    let arr: Array<number> = []
    for (let value = 1; value <= num; value++) {
        arr.push(value)
    }
    return arr
}

function makeCombinationArray(arr: Array<number>) {
    const combinationArr = []
    const tempArr = arr.slice(0)
    const lastNum = arr[arr.length - 1]
    while (tempArr.indexOf(lastNum) != 0) {
        tempArr.push(tempArr[0])
        tempArr.shift()
        combinationArr.push(tempArr.join(""))
    }
    return combinationArr
}

console.log(patternAmount(6))