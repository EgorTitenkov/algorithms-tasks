interface String {
   customUpperCase(): string
}

String.prototype.customUpperCase = function (): string {
   return this.toUpperCase()
}

// console.log('egor'.customUpperCase())
