import {toArabic} from "../src/string_functions/romanToNumber";

test('romanToNumber first test', () => {
    expect(toArabic('XXI')).toBe(21)
})

test('romanToNumber second test', () => {
    expect(toArabic('IV')).toBe(4)
})
