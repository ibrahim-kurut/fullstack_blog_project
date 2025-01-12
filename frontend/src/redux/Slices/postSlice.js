import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 3. get posts from server
export const getAllPosts = createAsyncThunk("posts/getAllPosts",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/blog/api/posts/");
            // Returning data if the request is successful
            return res.data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response ? e.response.data : e.message); // Return the error
        }
    }
);
// 4. create a new post
export const createPost = createAsyncThunk("posts/createPost",
    async ({ formData, token }, thunkAPI) => {
        try {
            const res = await axios.post("http://127.0.0.1:8000/blog/api/posts/", formData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Sending the user token with the request
                    'Content-Type': 'multipart/form-data',
                }
            })
            // Returning data if the request is successful
            return res.data;
        } catch (error) {

            console.error('Error response:', error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)






// 1. definition of Slice to manage data status
const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
        // create a new post
        builder
            .addCase(createPost.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
});

// 2. export Reducer
export default postsSlice.reducer;