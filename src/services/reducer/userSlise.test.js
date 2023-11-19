import { logIn } from './logIn'
import userReduser, { setForgotPass, initialState } from './userSlise'


const userRes = {
    user: {
        email: 'test@test.ru',
        name: 'test'
    }

}

const tokens = {
    accessToken: '123',
    refreshToken: '321'
}


describe('Запрос юзера', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'userRegistration/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'userRegistration/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'userRegistration/post/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'userRegistration/post/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})
describe('Запрос входа', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'logIn/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'logIn/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'logIn/post/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'logIn/post/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})

describe('Запрос логина', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'getUser/get/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'getUser/get/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'getUser/get/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})

describe('Запрос токена', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'getAccesToken/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'getAccesToken/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'getAccesToken/post/fulfilled', payload: tokens }))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})

describe('Запрос выхода', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'logOut/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'logOut/post/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'logOut/post/fulfilled' }))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})

describe('Запрос изменения данных', () => {
    test('запрос данных', () => {
        expect(userReduser(initialState, ({ type: 'changeUserInfo/path/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
        expect(userReduser(undefined, ({ type: 'changeUserInfo/path/pending' }))).toEqual({
            user: null,
            error: '',
            isLoading: true,
            isAuth: false,
            isForgot: false,
        })
    })
    test('получение данных', () => {
        expect(userReduser(initialState, ({ type: 'changeUserInfo/path/fulfilled', payload: userRes  }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initialState, ({ type: 'changeUserInfo/path/rejected', payload: "error" }))).toEqual({
            user: null,
            error: 'error',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })

})

describe('Запрос удаления токенов', () => {

    test('ошибка', () => {
        expect(userReduser(initialState, (setForgotPass()))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: true,
        })
    })

})