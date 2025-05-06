import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationSlice';

export const store = configureStore({
    reducer: {                                   //pass reducer object to confi stores
        notification: notificationReducer,                   //actual reducer function handling the state changes for that slice
    },
});
