import {createSlice , PayloadAction } from '@reduxjs/toolkit';
import { ILoginUser } from '../../Models/user.model';

type InitialState = {
    user: null | ILoginUser ,
     token: string | null,
}

const initialState:InitialState  = {
    user: null,
    token: null
  } 

const authSlice = createSlice({
    name : 'auth',
    initialState , 
    reducers: {
        setCredentials:(state, { payload : {user,token} } : PayloadAction<{user: ILoginUser ; token: string}>  ) => {
            state.user = user;
            state.token = token;
        }
        
    },  
    extraReducers: (builder) => {}
})

export const {setCredentials} = authSlice.actions;
export default authSlice.reducer;
//export const selectedCurrentUser = (state: RootState) => state.auth.user;