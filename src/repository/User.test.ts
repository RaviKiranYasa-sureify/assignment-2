import {jest,test,describe,beforeEach,expect, afterEach} from '@jest/globals'
import { User } from './User';
import { UserStatus } from '../types/Enums';

const localStorageMock = {
    getItem: jest.fn(),
    setItem:jest.fn()
};

beforeEach(() => {
    Object.defineProperty(global, "localStorage", {
        value: localStorageMock,
    });
}); 

describe('register user',() => {
    afterEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear()
    })
    test('user registered successfully ',() => {
        const user = new User();
        expect(localStorageMock.getItem).toBeCalledTimes(2);
        expect(localStorageMock.getItem).toBeCalledWith("username")
        expect(localStorageMock.getItem).toBeCalledWith("status")
        user.registerUsers("ravi","123","123");
        expect(localStorageMock.setItem).toBeCalledTimes(3);
        const username = "ravi";
        const password = "123";
        expect(localStorageMock.setItem).toBeCalledWith("username",username)
        expect(localStorageMock.setItem).toBeCalledWith("password",password)
        expect(localStorageMock.setItem).toBeCalledWith("status",UserStatus.ACTIVE.toString())
    })
    test ('get user details',() => {
        const user = new User();
        expect(localStorageMock.getItem).toBeCalledTimes(2);
        expect(localStorageMock.getItem).toBeCalledWith("username")
        expect(localStorageMock.getItem).toBeCalledWith("status")
        user.username = "ravi";

        user.status = UserStatus.ACTIVE;
        expect(user.getUserDetail()).toBe("ravi");
        user.status = UserStatus.INACTIVE;
        expect(user.getUserDetail()).toBe(null);


    })

})