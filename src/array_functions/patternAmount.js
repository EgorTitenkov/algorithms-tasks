function patternAmount(num) {
    var arr = fillArray(num);
    var combinationArr = makeCombinationArray(arr);
    combinationArr.unshift(arr.join(""));
    return combinationArr;
}
function fillArray(num) {
    var arr = [];
    for (var value = 1; value <= num; value++) {
        arr.push(value);
    }
    return arr;
}
function makeCombinationArray(arr) {
    var combinationArr = [];
    var tempArr = arr.slice(0);
    var lastNum = arr[arr.length - 1];
    while (tempArr.indexOf(lastNum) != 0) {
        tempArr.push(tempArr[0]);
        tempArr.shift();
        combinationArr.push(tempArr.join(""));
    }
    console.log(arr);
    return combinationArr;
}
console.log(patternAmount(6));
