import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";


export const userRegistration = createAsyncThunk(
    'userRegistration/post',
    async (obj, thunkApi) => {
        try {
            const res = await
            fetch(`${baseUrl}/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email: `${obj.email}`,
                    password: `${obj.password}`,
                    name: `${obj.name}`,
                    
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