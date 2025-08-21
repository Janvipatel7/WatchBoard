import { createSlice, nanoid } from "@reduxjs/toolkit";
import { data } from "react-router-dom";
import { toast } from "react-toastify";


const watchSlice  = createSlice({
    name : "users",
    initialState: {
        watchlist : JSON.parse(localStorage.getItem("list")) || [],
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
        addwatch: (state , action) => {
            state.watchlist.push({ id: nanoid(),...action.payload })
            localStorage.setItem("list" , JSON.stringify(state.watchlist))
        },
        addWatchCard : (state , action) => {
            if(action.payload == undefined){
                return
            }
            state.watchlist.push({ id: nanoid(),...action.payload })
            localStorage.setItem("list" , JSON.stringify(state.watchlist))
        },
        deleteWatch: (state , action) => {
            const deletedItem = state.watchlist.filter((watch) => {
                return watch.id != action.payload
            })
            state.watchlist = deletedItem
            localStorage.setItem("list" , JSON.stringify(state.watchlist))
        },
        editdetails: (state , action) => {
            const { id , ...data} = action.payload;
            const index = state.watchlist.findIndex((watch) => {
                return watch.id == id
            })
            if(index != -1){
                state.watchlist[index] = {id , ...data}
            }
            localStorage.setItem("list" , JSON.stringify(state.watchlist))
        }

        
    }
})

export const { tologin , tologout,addwatch , addWatchCard , deleteWatch ,editdetails} = watchSlice.actions
export default watchSlice.reducer