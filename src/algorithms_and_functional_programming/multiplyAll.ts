const arr5 = [1,5,7,8,2,3]

function multiplyAll(arr: Array<number>) {
    return function (multiplier:number){
        const multipliedArr = arr.map(num => {
            return num * multiplier
        })
        return multipliedArr
    }
}

console.log(multiplyAll(arr5)(2))
