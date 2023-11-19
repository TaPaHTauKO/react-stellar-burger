import selectIngredientReduser, { selectIngredient } from './selectIngredientSlice'
import { initialState } from './selectIngredientSlice'

export const ingredientWithUuid = {
    "__v": 0,
    "_id": "643d69a5c3f7b9001cfa093f",
    "calories": 420,
    "carbohydrates": 33,
    "fat": 244,
    "image": "https://code.s3.yandex.net/react/code/meat-02.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    "name": "Мясо бессмертных моллюсков Protostomia",
    "price": 1337,
    "proteins": 433,
    "type": "main",
    "unicId": "4f34e8c3-6003-dcb5-d21b-ee5868db8376",
}


describe('Тест конструктора', () => {
    test('начальный выбор ингредиента', () => {
        expect(selectIngredientReduser(undefined, selectIngredient(ingredientWithUuid))).toEqual({
            selectIngredient: ingredientWithUuid
        })
    })
    test('выбор ингредиента', () => {
        expect(selectIngredientReduser(initialState, selectIngredient(ingredientWithUuid))).toEqual({
            selectIngredient: ingredientWithUuid
        })
    })

})