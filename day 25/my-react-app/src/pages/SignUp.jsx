import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import coin from "../assets/coin.png"
export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        navigate('/success');
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-repeat" ></div>

            <form
                onSubmit={handleSubmit}
                className="z-10 bg-[#111] p-8 rounded-md border border-yellow-500 w-full max-w-xl shadow-xl"
            >
                <h2 className="text-white text-2xl font-bold text-center mb-2">Sign Up</h2>
                <p className="text-gray-400 text-center text-sm mb-6">Create your account below.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        name="phone"
                        placeholder="Phone No."
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                <label className="flex items-center mt-4 text-sm text-gray-400">
                    <input type="checkbox" className="mr-2" required />
                    I agree with the terms of use
                </label>

                <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-4"
                >
                    Sign up
                </button>

                <p className="text-center text-sm text-gray-400 mt-4">or sign up with other accounts?</p>
                <div className="flex justify-center gap-4 mt-2">
                    <FaGoogle className="text-white cursor-pointer hover:text-orange-500 transition-colors" />
                    <FaFacebookF className="text-white cursor-pointer hover:text-orange-500 transition-colors" />
                    <FaInstagram className="text-white cursor-pointer hover:text-orange-500 transition-colors" />
                    <FaLinkedinIn className="text-white cursor-pointer hover:text-orange-500 transition-colors" />
                </div>

                <p className="text-sm text-center text-gray-400 mt-4">
                    Already have an account?{' '}
                    <Link to="/" className="text-yellow-500">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
}
