import {countDuplicates} from "../src/string_functions/countDuplicates";

test('countDuplicates first test', () => {
    expect(countDuplicates('abcde')).toBe(0)
})

test('countDuplicates second test', () => {
    expect(countDuplicates('aabbcde')).toBe(2)
})
