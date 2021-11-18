function toMachineName(name: string, separator: string) {
   let nameArr = name.split(' ')
   const firstWord  = nameArr[0].split('').filter(sym => isNaN(+sym)).join('')
   nameArr[0] = firstWord
   const str = nameArr.join(' ').split(' ').filter(word => word).join(separator).toLowerCase()
   return str
}

console.log(toMachineName('312Hello       my name is Egor', '-'))
