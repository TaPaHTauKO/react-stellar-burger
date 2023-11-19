import { ingredientsArray } from './constructorIngredientSlice.test'
import orderReduser, { initialState } from './orderSlise'


const orderFromServer = {
    name: "Space флюоресцентный бургер",
    order: { number: 6514 },
    success: true
}



describe('Запрос номера заказа', () => {
    test('запрос данных', () => {
        expect(orderReduser(initialState, ({ type: 'orderQuery/post/pending' }))).toEqual({
            order: null,
            orderNumber: '',
            isLoading: true,
            ingredientsNumbers: null,
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
        expect(orderReduser(initialState, ({ type: 'orderQuery/post/fulfilled', payload: orderFromServer }))).toEqual({
            order: null,
            orderNumber: orderFromServer.order.number,
            isLoading: false,
            ingredientsNumbers: null,
            error: ''
        })
    })
    test('ошибка', () => {
        expect(orderReduser(initialState, ({ type: 'orderQuery/post/rejected', payload: "error" }))).toEqual({
            order: null,
            orderNumber: '',
            isLoading: false,
            ingredientsNumbers: null,
            error: 'error'
        })
    })

})