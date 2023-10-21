import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser } from "./authApiSlice";

// Create auth slice


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        message: null,
        error: null
    },

    reducers: {
        setMessageEmpty: (state, action) => {
            state.message = null;
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.rejected,(state, action) => {
            state.error = action.error.message
        })

        .addCase(createUser.fulfilled,(state, action) => {
            state.message = action.payload.message
        })
         .addCase(loginUser.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(loginUser.fulfilled,(state, action) => {
            state.message = action.payload.message
            state.user = action.payload.user
        })
            .addCase(logoutUser.rejected,(state, action) => {
            state.error = action.error.message
        })
         .addCase(logoutUser.fulfilled,(state, action) => {
            state.message = action.payload.message
            state.user = action.payload.user
        })
    },
});



// export 
export default authSlice.reducer;

// action export
export const {setMessageEmpty} = authSlice.actions