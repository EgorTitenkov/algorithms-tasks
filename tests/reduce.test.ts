import {reduce} from "../src/algorithms_and_functional_programming/reduce";

test('reduce first test', () => {
    expect(reduce(["1", "2", "2", "4"], (acc, value) => acc + value, "1")).toBe("11224")
})

test('reduce first test', () => {
    expect(reduce([1,2,3], (acc, value) => acc + value, 1)).toBe(7)
})