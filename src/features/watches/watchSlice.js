import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const watchSlice  = createSlice({
    name : "users",
    initialState: {
        list : [],
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    },
    reducers: {
        tologin : (state ,  action) => {
            const { email , password } = action.payload
            if(email == "admin@gmail.com" && password == "admin@123"){
                state.isLoggedIn = true
                localStorage.setItem("isLoggedIn" , JSON.stringify(true))
                toast.success("Logged In Successfully !");
            }else {
                state.isLoggedIn = false
                localStorage.setItem("isLoggedIn" , JSON.stringify(false))
                toast.error("Invalid Email Id or Password !")
            }
        },
        tologout: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn" , JSON.stringify(false))
        },

        
    }
})

export const { tologin , tologout } = watchSlice.actions
export default watchSlice.reducer