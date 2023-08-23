import {jest,test,describe,beforeEach,expect, afterEach} from '@jest/globals'
// const described = require('@jest/globals')
// import { describe, test, expect, jest } from "@jest/globals";
import Auth from './Auth';
import { authenticate } from '../controllers/Auth';
// const Auth = require('./Auth');

// import { authenticate } from '../controllers/Auth.js'

const localStorageMock = {
    getItem: jest.fn(),
    setItem:jest.fn()
};

beforeEach(() => {
    Object.defineProperty(global, "localStorage", {
        value: localStorageMock,
    });
}); 

describe('authentication',() => {
    afterEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear()
    })
    test('valid user',() => {
        const auth = new Auth();
        expect(localStorageMock.getItem).toBeCalledTimes(2);
        expect(localStorageMock.getItem).toBeCalledWith("username")
        expect(localStorageMock.getItem).toBeCalledWith("password")
        auth.username = "ravi";
        auth.password = "123"
        expect(auth.authentication("ravi","123")).toBe(true);
    })
    test('invalid user',() => {
        const auth = new Auth();
        expect(localStorageMock.getItem).toBeCalledTimes(2);
        expect(localStorageMock.getItem).toBeCalledWith("username")
        expect(localStorageMock.getItem).toBeCalledWith("password")
        auth.username = "ravi";
        auth.password = "12"
        expect(auth.authentication("ravi","123")).toBe(false);
    })
 })