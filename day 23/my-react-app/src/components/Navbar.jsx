import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold hover:underline">
                    🏠 Social Media Feed Dashboard
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>

                    <Link to="/profile/1" className="hover:underline">
                        Profile
                    </Link>
                    <Link to="/" className="hover:underline">
                        Create Post
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;