import {alphabetized} from "../src/string_functions/alphabetized";

test('alphabetized first test', () => {
    expect(alphabetized('The Holy      Bible.')).toBe('BbeehHilloTy')
})