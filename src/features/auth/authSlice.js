import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./authApiSlice";

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
        builder.addCase(createUser.rejected,(state, action) => {
            state.error = action.error.message
        })

         builder.addCase(createUser.fulfilled,(state, action) => {
            state.message = action.payload.message
        })
    },
});



// export 
export default authSlice.reducer;

// action export
export const {setMessageEmpty} = authSlice.actions