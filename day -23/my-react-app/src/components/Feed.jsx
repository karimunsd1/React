import React, { useState } from "react";
import CreatePostModal from "./CreatePostModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";                   //HTTP client to make API requests
import PostCard from "./PostCard";               // Component to display individual posts

const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data.slice(0, 10);
};

const Feed = () => {
    const { data: posts, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPostIndex, setCurrentPostIndex] = useState(0);         // Track the current post showing

    const handleNextPost = () => {
        if (posts && posts.length > 0) {
            setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length); // Cycle through posts
        }
    };

    const handlePreviousPost = () => {
        if (posts && posts.length > 0) {
            setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length); // Cycle backward through posts
        }
    };

    if (isLoading) return <p className="text-center mt-4 text-gray-500">Loading posts...</p>;
    if (isError) return <p className="text-center mt-4 text-red-500">Error loading posts.</p>;

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Social Feed</h1>

            {/* Create Post Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
                + Create New Post
            </button>

            {/* CreatePostModal */}
            {isModalOpen && <CreatePostModal setIsOpen={setIsModalOpen} />}

            {/* Single Post Display */}
            <div className="space-y-6">
                {posts && posts.length > 0 && <PostCard key={posts[currentPostIndex].id} post={posts[currentPostIndex]} />}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
                <button
                    onClick={handlePreviousPost}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    Previous Post
                </button>
                <button
                    onClick={handleNextPost}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    Next Post
                </button>
            </div>
        </div>
    );
};

export default Feed;