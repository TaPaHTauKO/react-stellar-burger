import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl, checkResponse } from "../../utils/api"


export const selectOrderQuery = createAsyncThunk(
    'selectOrderQuery/get',
    async (id: string | undefined, thunkApi) => {
        
        try {
            const res = await
                fetch(`${baseUrl}/orders/${id}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    
                })
            const responseData = await checkResponse(res)
            
            
            return thunkApi.fulfillWithValue(responseData)


        } catch (err) {
            return thunkApi.rejectWithValue(err || 'Ошибка при получении данных')
        }
    }
)