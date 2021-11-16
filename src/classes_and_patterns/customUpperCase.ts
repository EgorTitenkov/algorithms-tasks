interface String {
    customUpperCase():string
}

String.prototype.customUpperCase = function () {
    let result = this.toUpperCase()
    return result
};


console.log("egor".customUpperCase())