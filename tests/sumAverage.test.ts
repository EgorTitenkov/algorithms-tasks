import {sumAverage} from "../src/array_functions/sumAverage";

test('sumAverage first test', () => {
    expect(sumAverage([[1, 2, 3.5, 4], [1, 2.5, 5.3], [0.5, 0.6, 2]])).toBe(6)
})
