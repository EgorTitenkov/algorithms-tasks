export function toMachineName(name: string, separator: string) {
  let str = name.toLowerCase().replace(/\w[0-9]\w/, '')
  return str
    .split(' ')
    .filter((word) => word)
    .join(separator)
    .toLowerCase()
}

// console.log(toMachineName('312Hello       my name is Egor', '-'))
