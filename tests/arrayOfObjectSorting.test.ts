import {arrayOfObjectSorting} from "../src/sorting/arrayOfObjectSorting";

test('arrayOfObjectSorting first test', () => {
    expect(arrayOfObjectSorting([{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 4, b: 12 }],'a' ))
        .toStrictEqual([ { a: 4, b: 12 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }])
})

test('arrayOfObjectSorting second test', () => {
    expect(arrayOfObjectSorting([{ a: 1, b: 3 }, { b: 2 }, { a: 2, b: 40 }, { a: 4, b: 12 }],'a' ))
        .toStrictEqual([ { a: 4, b: 12 }, { a: 2, b: 40 }, { a: 1, b: 3 }, { b: 2 }])
})
