import {multiplyAll} from "../src/algorithms_and_functional_programming/multiplyAll";

test('multiplyAll first test', () => {
    expect(multiplyAll([1, 5, 7, 8, 2, 3])(2)).toStrictEqual([ 2, 10, 14, 16, 4, 6 ])
})