import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";

type T = {
    valueEmail: string,
    valueName: string
}

export const changeUserInfo = createAsyncThunk(
    'changeUserInfo/path',
    async (obj: T, thunkApi) => {
        try {
            const res = await
                fetch(`${baseUrl}/auth/user`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: localStorage.getItem('accessToken') || ''
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