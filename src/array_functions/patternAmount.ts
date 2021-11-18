function patternAmount(num: number) {
  const arr = [...Array(5).keys()];
  const combinationsArr = makeCombinationArray(arr);
  combinationsArr.unshift(arr.join(''));
  return combinationsArr;
}

function makeCombinationArray(arr: Array<number>) {
  const combinationsArr = [];
  const tempArr = arr.slice(0);
  const lastNum = arr[arr.length - 1];
  while (tempArr.indexOf(lastNum) != 0) {
    tempArr.push(tempArr[0]);
    tempArr.shift();
    combinationsArr.push(tempArr.join(''));
  }
  return combinationsArr;
}

console.log(patternAmount(6));
