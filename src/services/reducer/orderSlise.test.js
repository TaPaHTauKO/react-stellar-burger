import { ingredientsArray } from './constructorIngredientSlice.test'
import orderReduser from './orderSlise'

const initState = {
    order: null,
    orderNumber: '',
    isLoading: false,
    error: ''
}

const orderFromServer = {
    name: "Space флюоресцентный бургер",
    order: { number: 6514 },
    success: true
}



describe('Запрос номера заказа', () => {
    test('запрос данных', () => {
        expect(orderReduser(initState, ({ type: 'orderQuery/post/pending' }))).toEqual({
            order: null,
            orderNumber: '',
            isLoading: true,
            error: ''
        })
        expect(orderReduser(undefined, ({ type: 'orderQuery/post/pending' }))).toEqual({
            order: null,
            orderNumber: '',
            isLoading: true,
            ingredientsNumbers: null,
            error: ''
        })
    })
    test('получение данных', () => {
        expect(orderReduser(initState, ({ type: 'orderQuery/post/fulfilled', payload: orderFromServer }))).toEqual({
            order: null,
            orderNumber: orderFromServer.order.number,
            isLoading: false,
            error: ''
        })
    })
    test('ошибка', () => {
        expect(orderReduser(initState, ({ type: 'orderQuery/post/rejected', payload: "error" }))).toEqual({
            order: null,
            orderNumber: '',
            isLoading: false,
            error: 'error'
        })
    })

})