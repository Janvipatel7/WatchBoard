import { configureStore } from "@reduxjs/toolkit";
import watchReducer from "../features/watches/watchSlice";

const store = configureStore({
    reducer: {
        users: watchReducer
    }
});

export default store;