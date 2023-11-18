import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";
import { clearIngredient } from "./constructorIngredientSlise";

let token = localStorage.getItem("accessToken") as string

export const postOrderQuery = createAsyncThunk(
    'orderQuery/post',
    async (obj:string[], thunkApi) => {

        try {
            const res = await
            fetch(`${baseUrl}/orders`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: token

                    },
                    body: JSON.stringify({ "ingredients": obj })
                })                
            const responseData = await checkResponse(res)
            thunkApi.dispatch(clearIngredient())

            return thunkApi.fulfillWithValue(responseData)


        } catch (err) {
            return thunkApi.rejectWithValue(err || 'Ошибка при получении данных')
        }
    }
)