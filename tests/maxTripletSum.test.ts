import {maxTripletSum} from "../src/array_functions/maxTripletSum";

test('maxTripletSum first test', () => {
    expect(maxTripletSum([3, 2, 6, 8, 2, 3, 5, 6, 7, 4, 12, 52, 2])).toBe(72)
})