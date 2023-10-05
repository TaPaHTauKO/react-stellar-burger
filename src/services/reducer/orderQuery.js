import { createAsyncThunk } from "@reduxjs/toolkit";


export const postOrderQuery = createAsyncThunk(
    'orderQuery/post',
    async (obj, thunkApi) => {
        try {
            const res = await
                fetch('https://norma.nomoreparties.space/api/orders', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify({"ingredients": obj})
                });
            const data = await res.json()
            console.log(data);
            return data
               
        } catch (err) {
            return thunkApi.rejectWithValue('Ошибка')
        }


    }
)