import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/postSlice";

const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            dispatch(addComment({ postId, commentText }));
            setCommentText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex items-start space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    rows="3"
                    placeholder="Add a comment..."
                    className="border border-gray-300 p-2 w-full rounded-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none transition duration-300 ease-in-out transform hover:scale-105"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-full w-full mt-2 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            >
                Post
            </button>
        </form>
    );
};

export default CommentForm;