function toArabic(romanNumber: string) {
  const map = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const nums = romanNumber.split('');
  let result: number = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const first = map[nums[i]];
    const second = map[nums[i + 1]] ?? 0;
    if (first < second) {
      result += second - first;
      i += 1;
    } else {
      result += first;
    }
  }
  return result;
}

console.log(toArabic('CMXI')); // 911
console.log(toArabic('MXXIV')); // 1024
