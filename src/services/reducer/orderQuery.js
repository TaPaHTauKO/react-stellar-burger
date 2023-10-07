import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api";



export const postOrderQuery = createAsyncThunk(
    'orderQuery/post',
    async (obj, thunkApi) => {
        try {
            const res = await
                fetch(`${baseUrl}/orders`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify({"ingredients": obj})
                })
                .then(checkResponse)
            return res
               
        } catch (err) {
            return thunkApi.rejectWithValue('Ошибка')
        }


    }
)