import {biggest} from "../src/array_functions/biggest";

test('biggest first test', () => {
    expect(biggest([3, 30, 34, 5, 9])).toBe("9534330")
})

test('biggest third test', () => {
    expect(biggest([])).toBe("0")
})






