import { createAsyncThunk } from "@reduxjs/toolkit"

const baseUrl = 'https://norma.nomoreparties.space/api/ingredients'

export const fetchIngredientData = createAsyncThunk(
    'ingredientData/get',
    async (_, thunkApi) => {
        try {

            const res = await fetch(baseUrl);
            const base = await res.json();
            return base.data;

        } catch (err) {
            return thunkApi.rejectWithValue('Ошибка')
        }
    }

)