import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";


export const logIn = createAsyncThunk(
    'logIn/post',
    async (obj, thunkApi) => {
        try {
            const res = await
            fetch(`${baseUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    "email": `${obj.valueEmail}`,
                    "password": `${obj.valuePassword}`,
                    
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