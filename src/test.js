const numbers = [1,2,3]

const reduce = (arr, reducer, initialValue) => {
    let value = initialValue;

    for(let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        value = reducer(value, currentValue)
    }

    return value;
}

// const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)
const sumOfNumbersCustom = reduce(numbers, (initialValue, current) => initialValue + current, 10)

console.log(sumOfNumbersCustom);