import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";



export const sendEmail = createAsyncThunk(
    'sendEmail/post',
    async (obj, thunkApi) => {
        try {

            const res = await
                fetch(`${baseUrl}/password-reset`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: obj
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