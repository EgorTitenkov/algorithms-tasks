const zipWith = (fn:Function, arr1:Array<number>, arr2:Array<number>) => {
    let result:Array<number> = []
    for (let i = 0; i < arr1.length && i < arr2.length; i++) {
        result = [...result, fn(arr1[i], arr2[i])]
    }
    return result
}

console.log(zipWith(Math.max,[1,2,3,4], [3,1,5,2,5,2,3]))