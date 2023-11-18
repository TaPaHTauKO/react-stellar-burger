import ingredientDataReduser from './ingredientDataSlice'

const ingredientsArray = [
    {
        "_id": "643d69a5c3f7b9001cfa093c",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
    },
    {
        "_id": "643d69a5c3f7b9001cfa0943",
        "name": "Соус фирменный Space Sauce",
        "type": "sauce",
        "proteins": 50,
        "fat": 22,
        "carbohydrates": 11,
        "calories": 14,
        "price": 80,
        "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        "__v": 0
    },
    {
        "_id": "643d69a5c3f7b9001cfa093f",
        "name": "Мясо бессмертных моллюсков Protostomia",
        "type": "main",
        "proteins": 433,
        "fat": 244,
        "carbohydrates": 33,
        "calories": 420,
        "price": 1337,
        "image": "https://code.s3.yandex.net/react/code/meat-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
        "__v": 0
    }]

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