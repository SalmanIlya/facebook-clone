"use client"
// import { configureStore } from "@reduxjs/toolkit";
import {configureStore} from '@reduxjs/toolkit';
import User from "./User";

export const store=configureStore({
    
    reducer:{
User:User,

    }
})
