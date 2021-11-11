let arr3: Array<number> = [3,30,34,5,9];

function biggest(arr: Array<number>) {
  const sortedArr = arr.sort().reverse();
  const biggestNum = sortedArr.reduce((acc, value) => acc + value, "");
  console.log(biggestNum);
}

biggest(arr3);
