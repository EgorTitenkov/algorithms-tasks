import {zipWith} from "../src/higher_order_functions/zipWith";

test('zipWith first test', () => {
    expect(zipWith(Math.max, [1, 2, 3, 4], [3, 1, 5, 2, 5, 2, 3])).toStrictEqual([3,2,5,4])
})
