import { ingredientsArray } from './constructorIngredientSlice.test'
import ingredientDataReduser from './ingredientDataSlice'


const initState = {
    ingredientData: null,
    isLoading: false,
    error: '',

}

describe('Запрос ингредиентов', () => {
    test('запрос данных', () => {
        expect(ingredientDataReduser(initState, ({ type: 'ingredientData/get/pending' }))).toEqual({
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
        expect(ingredientDataReduser(initState, ({ type: 'ingredientData/get/fulfilled', payload: ingredientsArray }))).toEqual({
            ingredientData: ingredientsArray,
            isLoading: false,
            error: '',
        })
    })
    test('получение данных', () => {
        expect(ingredientDataReduser(initState, ({ type: 'ingredientData/get/rejected', payload: "error" }))).toEqual({
            ingredientData: null,
            isLoading: false,
            error: "error",
        })
    })
})