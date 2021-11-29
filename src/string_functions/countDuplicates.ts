export function countDuplicates(text: string): number {
   return (
      text
         .toLowerCase()
         .split('')
         .sort()
         .join('')
         .match(/([^])\1+/g) || []
   ).length
}

// console.log(countDuplicates('abcde'))
// console.log(countDuplicates('aabbcde'))
// console.log(countDuplicates('aabBcde'))
// console.log(countDuplicates('indivisibility'))
// console.log(countDuplicates('aA11'))
