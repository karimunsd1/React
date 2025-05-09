import React from "react";
import { useDispatch, useSelector } from "react-redux";  //Redux hooks to access the Redux store and dispatch actions
import { toggleLike } from "../redux/postSlice";      //action to toggle the like status of a post
import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const likedPosts = useSelector((state) => state.post.likedPosts);   //list of liked post IDs frm reduxstore
    const isLiked = likedPosts.includes(post.id);       //check if the post is liked by checking 

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="font-semibold text-xl text-gray-900 mb-2">{post.title}</div>

            {/*Link to the author's profile*/}
            <Link
                to={`/profile/${post.userId}`}
                className="text-blue-500 hover:underline text-sm mb-4 inline-block"
            >
                View Author Profile
            </Link>

            <p className="text-gray-700 mb-4">{post.body}</p>

            {/* Comment Section */}
            <CommentSection postId={post.id} />

            {/* Like and Comment Buttons */}
            <div className="mt-4 flex items-center justify-start space-x-4 text-sm text-gray-600">
                <button
                    onClick={() => dispatch(toggleLike(post.id))}
                    className={`flex items-center space-x-1 text-sm font-medium transition-all duration-300 ${isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
                >
                    <span>{isLiked ? "♥ Liked" : "♡ Like"}</span>
                </button>

            </div>
        </div>
    );
};

export default PostCard;