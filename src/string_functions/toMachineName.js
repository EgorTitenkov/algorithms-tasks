function toMachineName(name, separator) {
  var str = numCheck(name);
  var strWithoutFirstNum = str
    .split(' ')
    .filter(function (word) {
      return word;
    })
    .join(separator);
  return strWithoutFirstNum.toLowerCase();
}
function numCheck(str) {
  var formattedStr = str;
  var firstSym = +str[0];
  while (!isNaN(firstSym)) {
    formattedStr = formattedStr.slice(1);
    firstSym = +formattedStr[0];
  }
  return formattedStr;
}
console.log(toMachineName('312Hello       my name is Egor', '-'));
