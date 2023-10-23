import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";


export const getAccesToken = createAsyncThunk(
    'getAccesToken/post',
    async (_, thunkApi) => {
        try {
            const res = await
                fetch(`${baseUrl}/auth/token`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: localStorage.getItem('refreshToken'),
                    })
                })

            const user = await checkResponse(res)

            return thunkApi.fulfillWithValue(user)
        }

        catch (err) {

            return thunkApi.rejectWithValue(err || 'Ошибка при получении данных')

        }


    }
)