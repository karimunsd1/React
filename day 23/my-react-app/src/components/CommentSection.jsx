import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchComments = async (postId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return res.data;
};

const CommentSection = ({ postId }) => {
    const { data: comments, isLoading } = useQuery({
        queryKey: ["comments", postId],
        queryFn: () => fetchComments(postId),
    });

    const [newComment, setNewComment] = useState("");
    const [localComments, setLocalComments] = useState([]);

    const handleAddComment = () => {
        if (!newComment.trim()) return;
        const comment = {
            id: Date.now(),
            body: newComment,
            name: "You",
            email: "you@example.com",
        };
        setLocalComments([comment, ...localComments]);
        setNewComment("");
    };

    return (
        <div className="mt-4 border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Comments</h3>

            {isLoading ? (
                <p className="text-sm text-gray-500">Loading comments...</p>
            ) : (
                <>

                    {localComments.map((comment) => (
                        <div key={comment.id} className="text-sm mb-2 border-b pb-2">
                            <span className="font-semibold text-gray-700">{comment.name}:</span>
                            <span className="text-gray-600">{comment.body}</span>
                        </div>
                    ))}


                    {comments.slice(0, 3).map((comment) => (
                        <div key={comment.id} className="text-sm mb-2 border-b pb-2">
                            <span className="font-semibold text-gray-700">{comment.name}:</span>
                            <span className="text-gray-600">{comment.body}</span>
                        </div>
                    ))}
                </>
            )}


            <div className="mt-4 flex items-center gap-3">
                <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 text-sm rounded-full w-full focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    onClick={handleAddComment}
                    className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out"
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default CommentSection;