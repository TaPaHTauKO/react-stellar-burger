import { RootState } from ".."


export const userSelector = (store: RootState) => store.user.user
export const userForgotSelector = (store: RootState) => store.user.isForgot