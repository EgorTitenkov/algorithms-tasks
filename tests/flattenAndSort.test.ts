import {flattenAndSort} from "../src/algorithms_and_functional_programming/flattenAndSort";

test('flattenAndSort first test', () => {
    expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})