import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    likedPosts: [],
};

const postSlice = createSlice({
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body,
            };
            state.posts.unshift(newPost);
        },
        toggleLike: (state, action) => {
            const postId = action.payload;
            if (state.likedPosts.includes(postId)) {
                state.likedPosts = state.likedPosts.filter((id) => id !== postId);
            } else {
                state.likedPosts.push(postId);
            }
        },
    },
});

export const { setPosts, addPost, toggleLike } = postSlice.actions;
export default postSlice.reducer;                      