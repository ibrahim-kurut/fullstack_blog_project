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


// login Process
export const login = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
    try {
        // send user data to the API
        const { username, password } = userData;
        const res = await axios.post("http://127.0.0.1:8000/blog/api/users/login/", {
            username,
            password
        })
        // check the api response
        const user = res.data;
        if (!user) {
            throw new Error("invalid username or password")
        }
        // save user date in localStorage
        localStorage.setItem("userInfo", JSON.stringify(user));

        return user;
    } catch (e) {
        // If the error contains a response from the server
        if (e.response && e.response.data.detail) {
            return rejectWithValue(e.response.data.detail);
        } else {
            return rejectWithValue(e.message);
        }
    }
})
//  initialize user
const initialState = {
    // If the user info is in Local Storage, get it, or it return null
    user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
    isLoggedIn: localStorage.getItem("userInfo") ? true : false,
    status: 'idle',
    error: null,

};

// create user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action for logging out the user
        logout: (state) => {
            // Remove user info from localStorage
            localStorage.removeItem("userInfo");
            // Reset user state
            state.user = null;
            state.isLoggedIn = false;
            state.status = 'idle';
            state.error = null;
        }
    },
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
            // ============== login ==============
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})
export default userSlice.reducer;
export const { logout } = userSlice.actions;