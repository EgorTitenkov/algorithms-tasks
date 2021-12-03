interface String {
    customUpperCase(): String;
}

String.prototype.customUpperCase = function (): string {
    return this.toUpperCase()
}

