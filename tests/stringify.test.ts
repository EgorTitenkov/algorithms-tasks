import {stringify, MyNode} from "../src/recursion/stringify";

test('stringify first test', () => {
    expect(stringify(new MyNode(1, new MyNode(2, new MyNode(3, null))))).toBe('1 -> 2 -> 3 -> null')
})

test('stringify second test', () => {
    expect(stringify(new MyNode(1,new MyNode(2)))).toBe("1 -> 2 -> null")
})