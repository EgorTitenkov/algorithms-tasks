
export function toMachineName(name: string, separator: string) {
   let str = name
       .toLowerCase()
       .replace(/[0-9]/g, '')
   return str
      .split(' ')
      .filter((word) => word)
      .join(separator)
      .toLowerCase()
}

// console.log(toMachineName('312Hello       my name is Egor', '-'))
