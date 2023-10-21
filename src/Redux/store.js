import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accountsSlice";

const store = configureStore({
    reducer: {
        accounts: accountsReducer,
    },
});

export default store;
