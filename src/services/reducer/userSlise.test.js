import { logIn } from './logIn'
import userReduser, { setForgotPass } from './userSlise'

const initState = {
    user: null,
    error: '',
    isLoading: false,
    isAuth: false,
    isForgot: false,
}

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
        expect(userReduser(initState, ({ type: 'userRegistration/post/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'userRegistration/post/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'userRegistration/post/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'logIn/post/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'logIn/post/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'logIn/post/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'getUser/get/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'getUser/get/fulfilled', payload: userRes }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: true,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'getAccesToken/post/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'getAccesToken/post/fulfilled', payload: tokens }))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'logOut/post/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'logOut/post/fulfilled' }))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'getUser/get/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'changeUserInfo/path/pending' }))).toEqual({
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
        expect(userReduser(initState, ({ type: 'changeUserInfo/path/fulfilled', payload: userRes  }))).toEqual({
            user: userRes.user,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: false,
        })
    })
    test('ошибка', () => {
        expect(userReduser(initState, ({ type: 'changeUserInfo/path/rejected', payload: "error" }))).toEqual({
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
        expect(userReduser(initState, (setForgotPass()))).toEqual({
            user: null,
            error: '',
            isLoading: false,
            isAuth: false,
            isForgot: true,
        })
    })

})