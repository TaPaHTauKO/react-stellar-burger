import { createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl, checkResponse } from "../../utils/api";


export const fetchIngredientData = createAsyncThunk(
    'ingredientData/get',
    async (_, thunkApi) => {
        try {

            const res = await fetch(`${baseUrl}/ingredients`,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",

                },
            })

            const responseData = await checkResponse(res)

            return thunkApi.fulfillWithValue(responseData.data)
        }
        catch (err) {
             return thunkApi.rejectWithValue(err || 'Ошибка при получении данных')
        }
    }

)