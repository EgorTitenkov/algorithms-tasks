var arr2 = [3, 2, 6, 8, 2, 3, 5, 6, 7, 4, 12, 52, 2];
function maxTripletSum(arr) {
    var uniqueArr = createUniqueArr(arr);
    var sortedArr = uniqueArr.sort(function (a, b) { return a - b; });
    var threeMaxNums = sortedArr.slice(sortedArr.length - 3, sortedArr.length);
    var resultSum = threeMaxNums.reduce(function (acc, value) { return acc + value; });
    return resultSum;
}
function createUniqueArr(arr) {
    var uniqueArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}
console.log(maxTripletSum(arr2));
