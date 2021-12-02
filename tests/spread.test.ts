import {spread} from "../src/higher_order_functions/spread";

test('spread first test', () => {
    expect(spread((a: number, b: number) => a + b, [5, 2])).toBe(7)
})
