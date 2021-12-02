import {patternAmount} from "../src/array_functions/patternAmount";

test('patternAmount first test', () => {
    expect(patternAmount(4)).toBe('1234\n2341\n3412\n4123')
})