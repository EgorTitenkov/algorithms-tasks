function countDuplicates(text: string) {
   const amountOfCounts = {}
   const lowText = text.toLowerCase()
   const destructedText = lowText.split('')
   destructedText.forEach((index) => {
      if (amountOfCounts[index] != undefined) {
         amountOfCounts[index]++
      } else {
         amountOfCounts[index] = 1
      }
   })
   const amountOfDubbedSymbol: number = getAmountOfDubbedSymbol(amountOfCounts)
   return amountOfDubbedSymbol
}

function getAmountOfDubbedSymbol(amountOfCounts: object) {
   const arrOfCounts = Object.values(amountOfCounts)
   const arrOfDubbedCounts =arrOfCounts.filter(el => el > 1)
   return arrOfDubbedCounts.length
}

console.log(countDuplicates('abcde'))
console.log(countDuplicates('aabbcde'))
console.log(countDuplicates('aabBcde'))
console.log(countDuplicates('indivisibility'))
console.log(countDuplicates('aA11'))
