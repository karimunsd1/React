import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    likedPosts: [],                                          // Array to store IDs of liked posts
};

const postSlice = createSlice({                              // Create a slice of the Redux store for posts
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {                             // Action to set posts in the state
            state.posts = action.payload;                         // Set the posts in the state
        },
        addPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body,                      // Create a new post object with a unique ID and the provided title and body
            };
            state.posts.unshift(newPost);                               // add the new post at the top
        },
        toggleLike: (state, action) => {
            const postId = action.payload;                                // Get the post ID from  action payload
            if (state.likedPosts.includes(postId)) {                          // Check  post is already liked
                state.likedPosts = state.likedPosts.filter((id) => id !== postId);
            } else {
                state.likedPosts.push(postId);
            }
        },
    },
});

export const { setPosts, addPost, toggleLike } = postSlice.actions;           // Export the actions to be used in components
export default postSlice.reducer;                      