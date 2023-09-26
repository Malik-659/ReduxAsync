import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersAPI = "http://localhost:8000/users"

const userSlice = createSlice({
    name:"users",
    initialState: {
        users:[]
    },
    reducers: {},
    extraReducers: {}
})

export default userSlice.reducer