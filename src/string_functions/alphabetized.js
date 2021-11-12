function alphabetized(text) {
    var symbolArray = text.split('');
    var sortedString = symbolArray.sort(comparison).join('');
    var resultStr = erasePunctuationMark(sortedString).join('');
    return resultStr;
}
function comparison(a, b) {
    var comparison = a.toLowerCase().localeCompare(b.toLowerCase());
    if (comparison === 0) {
        return a.localeCompare(b);
    }
    return comparison;
}
function erasePunctuationMark(str) {
    var letterArr = str.split('');
    var filteredArr = letterArr.filter(function (sym) {
        return sym != ' ' && sym != ',' &&
            sym != '!' && sym != '?' &&
            sym != '.';
    });
    return filteredArr;
}
console.log(alphabetized("!! !Acgqbg  !.Hwrt!!!?., "));
