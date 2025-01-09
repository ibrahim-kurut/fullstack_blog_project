import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Registration Process
export const register = createAsyncThunk('user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/blog/api/users/register/', userData)
            return res.data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    });

//  initialize user
const initialState = {
    user: null,
    isLoggedIn: false,
    status: 'idle',
    error: null,

};

// create user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ============== register ==============
            .addCase(register.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.status = 'succeeded';
                state.error = null

            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})
export default userSlice.reducer;