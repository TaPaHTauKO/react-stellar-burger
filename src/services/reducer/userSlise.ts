import { createSlice } from "@reduxjs/toolkit"
import { userRegistration } from "./userRegistration";
import { getUser } from "./getUser";
import { getAccesToken } from "./getAccessToken";
import { logIn } from "./logIn";
import { logOut } from "./logOut";
import { changeUserInfo } from "./changeUserInfo";
import { TUser } from "../types";

type SliceState = {
    user: null | TUser,
    error: string | unknown,
    isLoading: boolean,
    isAuth: boolean,
    isForgot: boolean,
}

const initialState: SliceState = {
    user: null,
    error: '' ,
    isLoading: false,
    isAuth: false,
    isForgot: false,
}


const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser(state) {
            state.user = null;
            state.isLoading = false;
            state.error = '';
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            state.isAuth = false;
            
        },
        setUserAuth(state) {
            state.isAuth = true;
        },
        setForgotPass(state) {
            state.isForgot = true;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegistration.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.error = '';
                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
                state.isAuth = true;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.error = '';
                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
                state.isAuth = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.error = '';
                state.isAuth = true;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getAccesToken.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(getAccesToken.fulfilled, (state, action) => {
                localStorage.setItem("accessToken", action.payload.accessToken);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
                state.isLoading = false;
                state.error = '';
            })
            .addCase(getAccesToken.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.user = null;
                state.isLoading = false;
                state.error = '';
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                state.isAuth = false;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(changeUserInfo.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(changeUserInfo.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLoading = false;
                state.error = '';
            })
            .addCase(changeUserInfo.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const { setUserAuth, removeUser, setForgotPass } = userSlise.actions;

export default userSlise.reducer