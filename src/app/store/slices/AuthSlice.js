import { createSlice } from "@reduxjs/toolkit";
 const AuthSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers:{
        isAuth(state,action){
           return state = !state;
       
        },
        
    }
 })
 export const {isAuth}=AuthSlice.actions;
 export default AuthSlice.reducer;
