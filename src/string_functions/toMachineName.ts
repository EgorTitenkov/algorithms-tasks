export function toMachineName(name: string, separator: string) : string {
  let str = name.toLowerCase().replace(/\w[0-9]\w/, '')
  return str
    .split(' ')
    .filter((word) => word)
    .join(separator)
    .toLowerCase()
}
