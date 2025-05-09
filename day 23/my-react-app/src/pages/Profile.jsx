import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostCard from "../components/PostCard";

const fetchUser = async (userId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return res.data;
};

const fetchUserPosts = async (userId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return res.data;
};

const Profile = () => {
    const { userId } = useParams();


    const { data: user, isLoading: loadingUser } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => fetchUser(userId),
    });


    const { data: posts, isLoading: loadingPosts } = useQuery({
        queryKey: ["userPosts", userId],
        queryFn: () => fetchUserPosts(userId),
    });

    if (loadingUser) return <p className="text-center mt-4">Loading user info...</p>;
    if (loadingPosts) return <p className="text-center mt-4">Loading posts...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="text-center">

                <h2 className="text-3xl font-bold text-gray-800 mb-2">👤 {user.name}</h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">📧</span> {user.email}
                </p>
                <p className="text-gray-600 mb-4">
                    <span className="font-semibold">🏙️</span> {user.address.city}
                </p>
            </div>

            <hr className="border-gray-300 my-4" />


            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Posts by {user.name}:</h3>
            {posts.length > 0 ? (
                posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
                <p className="text-center text-gray-500">No posts available.</p>
            )}
        </div>
    );
};

export default Profile;