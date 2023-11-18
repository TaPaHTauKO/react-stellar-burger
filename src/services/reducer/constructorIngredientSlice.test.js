import * as uuid from 'uuid';
import constructorIngredientReduser, { addIngredient, clearIngredient, deleteIngredient, sortIngredients } from './constructorIngredientSlise'

jest.mock('uuid');

const initState = {
    ingredientInBurger: []
}

export const ingredientsArray = [
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

const ingredient = {
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
    "__v": 0,
}
const ingredientUuid = {
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
    "__v": 0,
    "unicId": "12345"
}

const initStateWithIngr = {
    ingredientInBurger: [{
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
}]}

const ingredientWithUuid = {
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
    // test('начальное добавление ингредиента', () => {
    //     expect(constructorIngredientReduser(undefined, addIngredient(ingredient))).toEqual({
    //         ingredientInBurger: [ingredient]
    //     })
    // })
    // test('добавление ингредиента', () => {
    //     jest.spyOn(uuid, 'v4').mockReturnValue('1234')
    //     expect(constructorIngredientReduser(initState, addIngredient(ingredient))).toEqual({
    //         ingredientInBurger: [ingredientUuid]
    //     })
    // })
    test('удаление ингредиента', () => {
        expect(constructorIngredientReduser(initStateWithIngr, deleteIngredient(ingredientWithUuid.unicId))).toEqual({
            ingredientInBurger: []
        })
    })
    test('сортировка ингредиентов', () => {
        expect(constructorIngredientReduser(initStateWithIngr, sortIngredients(ingredientsArray))).toEqual({
            ingredientInBurger: ingredientsArray
        })
    })
    test('очистка ингредиентов', () => {
        expect(constructorIngredientReduser(initStateWithIngr, clearIngredient())).toEqual({
            ingredientInBurger: []
        })
    })

})