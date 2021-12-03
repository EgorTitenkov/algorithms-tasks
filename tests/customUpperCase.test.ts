interface String {
    customUpperCase(): String;
}

String.prototype.customUpperCase = function (): string {
    return this.toUpperCase()
}

test('maxTripletSum first test', () => {
    expect("abc".customUpperCase()).toBe("ABC")
})
