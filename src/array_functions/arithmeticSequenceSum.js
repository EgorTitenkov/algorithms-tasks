function arithmeticSequenceSum(num, value, elementsCount) {
  var arr = [];
  arr.push(num);
  for (var i = 1; i <= elementsCount - 1; i++) {
    var element = num + value * i;
    arr.push(element);
  }
  var arithmeticSum = arr.reduce(function (acc, value) {
    return acc + value;
  });
  return arithmeticSum;
}
console.log(arithmeticSequenceSum(1, 2, 4));
