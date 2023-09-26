import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./usersSlice"

export default configureStore({
    reducer: {
        users: usersReduser
    }
})