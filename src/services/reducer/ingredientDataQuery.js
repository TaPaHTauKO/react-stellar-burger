import { createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl, checkResponse } from "../../utils/api";


export const fetchIngredientData = createAsyncThunk(
    'ingredientData/get',
    async (_, thunkApi) => {
        try {

            const res = await fetch(`${baseUrl}/ingredients`)

                .then(checkResponse)

            return res.data;


        }
        catch (err) {
            return thunkApi.rejectWithValue('Ошибка')
        }
    }

)