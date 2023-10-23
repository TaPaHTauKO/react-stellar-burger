import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";
import { getAccesToken } from "./getAccessToken";




export const getUser = createAsyncThunk(
    'getUser/get',
    async (_, thunkApi) => {
        try {

            const res = await
                fetch(`${baseUrl}/auth/user`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        authorization: localStorage.getItem('accessToken')
                    },
                })

            const user = await checkResponse(res)

            return thunkApi.fulfillWithValue(user)
        }
        catch (err) {

            return thunkApi.rejectWithValue(err || 'Ошибка при получении данных')
        }

    }
)