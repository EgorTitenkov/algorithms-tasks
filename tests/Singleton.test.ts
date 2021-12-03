import {Singleton} from "../src/classes_and_patterns/Singleton";
import {reduce} from "../src/algorithms_and_functional_programming/reduce";

test('singleton first test', () => {
    const object1 = Singleton.getInstance()
    const object2 = Singleton.getInstance()
    expect((object1 === object2)).toBe(true)
})

test('singleton first test', () => {
    const object1 = Singleton.getInstance()
    const object2 = {}
    expect((object1 === object2)).toBe(false)
})


