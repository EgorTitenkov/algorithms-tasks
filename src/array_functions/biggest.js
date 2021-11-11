var arr3 = [3, 30, 34, 5, 9];
function biggest(arr) {
    var sortedArr = arr.sort().reverse();
    var biggestNum = sortedArr.reduce(function (acc, value) { return acc + value; }, "");
    console.log(biggestNum);
}
biggest(arr3);
