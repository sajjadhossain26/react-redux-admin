import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
   try {
     const response = await axios.post('http://localhost:5050/api/auth/register', data)
     return response.data
   } catch (error) {
    throw new Error(error.response.data.message)
   }
   
})