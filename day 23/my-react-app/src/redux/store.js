import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";

export const store = configureStore({
    reducer: {
        post: postReducer,            // Add the post slice reducer to the store
    },
});