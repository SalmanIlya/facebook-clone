"use client"
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:{}
}
export const User=createSlice({
    name:"User",
    initialState,
    reducers:{
saveUser:(state,action)=>{
  
    state.user=action.payload
   

},
deleteUser:(state,action)=>{
    state.user={}
}
    }
})
export const {saveUser,deleteUser}=User.actions
export default User.reducer