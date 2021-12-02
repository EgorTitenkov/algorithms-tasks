import {sequenceSum} from "../src/recursion/sequenceSum";

test('sequenceSum first test', () => {
    expect(sequenceSum(1, 7, 3)).toBe(12)
})

test('sequenceSum second test', () => {
    expect(sequenceSum(2,2,2)).toBe(2)
})

test('sequenceSum third test', () => {
    expect(sequenceSum(6,5,1)).toBe(0)
})