import {toMachineName} from "../src/string_functions/toMachineName";

test('toMachineName first test', () => {
    expect(toMachineName('312Hello       my name is Egor', '-')).toBe('hello-my-name-is-egor')
})

test('toMachineName second test', () => {
    expect(toMachineName('Lorem        ipsum sit    DOLOR', '-')).toBe('lorem-ipsum-sit-dolor')
})

