import {biggest} from "../src/array_functions/biggest";

test('biggest first test', () => {
    expect(biggest([3, 30, 34, 5, 9])).toBe("9534330")
})

test('biggest second test', () => {
    expect(biggest([1,2,3])).toBe("321")
})

test('biggest third test', () => {
    expect(biggest([300,723,6,7,3])).toBe("772363300")
})






