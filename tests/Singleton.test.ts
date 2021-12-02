import {mocked} from "ts-jest/utils";
import {Singleton} from "../src/classes_and_patterns/Singleton";

jest.mock('../src/classes_and_patterns/Singleton', () => ({
    Singleton: jest.fn(),
}))

describe('Singleton Test', () => {
    it('', () => {
        const object1 = jest.fn()

        const SingletonMock: any = mocked(Singleton, true)
        object1.mockImplementation(() => ({
            
        }))
    })
})