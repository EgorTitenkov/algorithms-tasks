interface String {
    customUpperCase():string
}

String.prototype.customUpperCase = function () {
    let result : string = this.toUpperCase()
    return result
};


console.log("egor".customUpperCase())