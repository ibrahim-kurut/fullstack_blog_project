import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import postsReducer from "./Slices/postSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    },
});

export default store;