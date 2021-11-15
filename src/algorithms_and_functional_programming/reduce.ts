function reduce (arr:Array<number>, reducer:Function, initialValue:number){
    let value = initialValue;
    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        value = reducer(value, currentValue)
    }
    return value;
}

console.log(reduce([1, 2, 3, 4], (acc: number, value: number) => acc * value, 1))