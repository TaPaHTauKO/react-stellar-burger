import { ingredientsArray, initialState } from './constructorIngredientSlice.test'
import ingredientDataReduser from './ingredientDataSlice'


describe('Запрос ингредиентов', () => {
    test('запрос данных', () => {
        expect(ingredientDataReduser(initialState, ({ type: 'ingredientData/get/pending' }))).toEqual({
            ingredientData: null,
            isLoading: true,
            error: '',
        })
        expect(ingredientDataReduser(undefined, ({ type: 'ingredientData/get/pending' }))).toEqual({
            ingredientData: null,
            isLoading: true,
            error: '',
        })
    })
    test('получение данных', () => {
        expect(ingredientDataReduser(initialState, ({ type: 'ingredientData/get/fulfilled', payload: ingredientsArray }))).toEqual({
            ingredientData: ingredientsArray,
            isLoading: false,
            error: '',
        })
    })
    test('получение данных', () => {
        expect(ingredientDataReduser(initialState, ({ type: 'ingredientData/get/rejected', payload: "error" }))).toEqual({
            ingredientData: null,
            isLoading: false,
            error: "error",
        })
    })
})