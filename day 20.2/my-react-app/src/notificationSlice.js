import { createSlice } from '@reduxjs/toolkit';         //creating reducers and action creators

const initialState = {
    message: null,
    type: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;                     //updates the state based on the payload passed in the action
        },
        hideNotification: (state) => {
            state.message = null;
            state.type = null;
        },
    },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

