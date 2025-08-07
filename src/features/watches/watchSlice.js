import { createSlice } from "@reduxjs/toolkit";


const watchSlice  = createSlice({
    name : "users",
    initialState: {
        list : [],
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    },
    reducers: {
        addUser: (state , action) => {

        },
        deleteUser: () => {

        }
    }
})
export default watchSlice.reducer