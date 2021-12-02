import {compose} from "../src/algorithms_and_functional_programming/compose";

test('compose first test', () => {
    expect(compose(Math.sin, Math.sqrt, Math.floor)(4.2)).toBe(0.9092974268256817)
})