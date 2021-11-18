function arithmeticSequenceSum(num: number, value: number, elementsCount: number) {
    const arr: Array<number> = [];
    arr.push(num);
    for (let i = 1; i <= elementsCount - 1; i++) {
        const element = num + value * i;
        arr.push(element);
    }
    const arithmeticSum: number = arr.reduce((acc, value) => acc + value);
    return arithmeticSum;
}

console.log(arithmeticSequenceSum(2, 3, 5));
