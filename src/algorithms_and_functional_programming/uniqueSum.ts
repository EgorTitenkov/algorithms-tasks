const arr6:Array<number> = [1,2,3,3,4,5]

function uniqueSum(arr:Array<number>){
    const setFromArr = new Set(arr)
    const uniqueArr = [...setFromArr]
    const sum = uniqueArr.reduce((acc:number,value:number) => {
        return acc + value
    })
    return sum
}

console.log(uniqueSum(arr6))