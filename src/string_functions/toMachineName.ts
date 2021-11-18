function toMachineName(name: string, separator: string) {
  let str = numCheck(name)
  const strWithoutFirstNum: string = str
    .split(' ')
    .filter(word => word)
    .join(separator)
  return strWithoutFirstNum.toLowerCase()
}

function numCheck(str: string) {
  let formattedStr: string = str
  let firstSym = +str[0]
  console.log(firstSym)
  while (!isNaN(firstSym)) {
    formattedStr = formattedStr.slice(1)
    firstSym = +formattedStr[0]
  }
  return formattedStr
}

console.log(toMachineName('312Hello       my name is Egor', '-'))
