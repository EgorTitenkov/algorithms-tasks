function alphabetized(text: string) {
    const symbolArray = text.split('')
    const sortedString =  symbolArray.sort(comparison).join('')
    const resultStr = erasePunctuationMark(sortedString).join('')
    return resultStr
}

function comparison(a:string,b:string){
    const comparison = a.toLowerCase().localeCompare(b.toLowerCase())
    if (comparison === 0) {
        return a.localeCompare(b)
    }
    return comparison
}

function erasePunctuationMark(str: string) {
    const letterArr = str.split('')
    const filteredArr = letterArr.filter(sym =>
        sym != ' ' && sym != ',' &&
        sym != '!' && sym != '?' &&
        sym != '.')
    return filteredArr
}


console.log(alphabetized("!! !Acgqbg  !.Hwrt!!!?., "))