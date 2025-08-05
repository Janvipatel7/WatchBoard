import { createSlice } from "@reduxjs/toolkit";
import { list } from "postcss";

const watchSlice  = createSlice({
    name : "users",
    initialState: {
        list : []
    },
    reducers: {
        addUser: (state , action) => {

        },
        deleteUser: () => {

        }
    }
})