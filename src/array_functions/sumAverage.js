var arr = [
  [1, 2, 3.5, 4],
  [1, 2.5, 5.3],
  [0.5, 0.6, 2],
];
function sumAverage(arr) {
  var averageSum = averageValueArr(arr);
  var result = Math.floor(averageSum);
  return result;
}
function averageValueArr(arr) {
  var averageValueArr = arr.map(function (innerArr) {
    return (
      innerArr.reduce(function (acc, value) {
        return acc + value;
      }) / innerArr.length
    );
  });
  return averageSumValue(averageValueArr);
}
function averageSumValue(averageValueArr) {
  var averageSum = averageValueArr.reduce(function (acc, value) {
    return acc + value;
  });
  return averageSum;
}
console.log(sumAverage(arr));
