const arr4:Array<Array<number>> = [[3,2,1],[4,6,5],[],[9,7,8]]

function flattenAndSort(arr:Array<Array<number>>){
    const unitedArr :Array<Array<number>> = [].concat(...arr).sort()
    return unitedArr
}

console.log(flattenAndSort(arr4))