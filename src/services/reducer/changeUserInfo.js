import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";


export const changeUserInfo = createAsyncThunk(
    'changeUserInfo/path',
    async (obj, thunkApi) => {
        try {
            const res = await
                fetch(`${baseUrl}/auth/user`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: localStorage.getItem('accessToken')
                    },
                    body: JSON.stringify({
                        email: `${obj.valueEmail}`,
                        name: `${obj.valueName}`,
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