import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postSlice";

const CreatePostModal = ({ setIsOpen }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && body.trim()) {
            dispatch(addPost({ title, body }));
            setIsOpen(false); // Clear  modal after adding  post
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-xl w-96 shadow-lg transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title"
                        />
                    </div>
                    {/*textarea for the post body*/}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Body</label>
                        <textarea
                            className="border border-gray-300 px-4 py-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
                            rows="4"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Enter post body"
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-500 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all duration-200"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostModal;