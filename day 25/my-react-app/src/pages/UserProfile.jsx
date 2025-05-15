import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import Buy from '../assets/buy.png';
import Safe from '../assets/safe.png';
import Users from '../assets/users.png';

const UserProfile = () => {
    return (
        <div className="h-screen flex flex-col bg-[#0f0f0f] text-white font-sans">
            {/* Top Navbar */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 flex-shrink-0">
                <div className="text-xl font-bold">Dashboard</div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FaSearch className="absolute top-2 left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-1 bg-gray-800 rounded-md text-sm focus:outline-none"
                        />
                    </div>
                    <button className="bg-orange-500 px-4 py-1 rounded text-sm">Buy / Sell</button>
                    <button className="bg-gray-700 px-4 py-1 rounded text-sm">+ Add New Crypto</button>
                    <FaBell className="text-lg" />
                    <div className="flex items-center gap-2">
                        <img src="https://i.pravatar.cc/30" alt="User" className="rounded-full w-7 h-7" />
                        <div className="text-sm">
                            <div className="font-medium">Wade Warren</div>
                            <div className="text-gray-400 text-xs">Super Admin</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 py-6">
                    {/* Hero */}
                    <div className="lg:col-span-4 bg-[#1c1c1c] rounded-lg p-4 flex justify-between items-center overflow-hidden">
                        <img src={Buy} alt="Buy" className="h-32" />
                        <img src={Safe} alt="Safe" className="h-32" />
                        <img src={Users} alt="Users" className="h-32" />
                    </div>

                    {/* Left Sidebar */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* User Profile */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg text-center">
                            <img src="https://i.pravatar.cc/100" alt="User" className="rounded-full w-20 h-20 mx-auto" />
                            <h3 className="mt-2 font-semibold text-lg">Wade Warren</h3>
                            <p className="text-gray-400 text-sm">Super Admin</p>
                        </div>

                        {/* News */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">📰 News</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>Latest bitcoin chart released</li>
                                <li>ETH gas fees decreased</li>
                                <li>Stablecoins gaining attention</li>
                            </ul>
                        </div>

                        {/* Market Cap */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">📊 Market Cap</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>Bitcoin</li>
                                <li>Ethereum</li>
                                <li>Litecoin</li>
                                <li>Chainlink</li>
                            </ul>
                        </div>

                        {/* Suggestions */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">💡 Suggestions</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>Invest in BTC</li>
                                <li>Monitor ETH trends</li>
                                <li>Consider staking</li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-4">
                        {[1, 2, 3].map((id) => (
                            <div key={id} className="bg-[#1c1c1c] p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
                                        <div>
                                            <h5 className="font-semibold">Wade Warren</h5>
                                            <p className="text-gray-400 text-sm">12 mins ago</p>
                                        </div>
                                    </div>
                                    <HiOutlineDotsVertical className="text-gray-400" />
                                </div>
                                <p className="text-sm text-gray-300 mt-3">
                                    Just made another crypto transaction. I’m getting the hang of this!
                                </p>
                                <div className="mt-3 flex items-center gap-4 text-gray-400 text-sm">
                                    <button className="hover:text-white">💬 24 Comments</button>
                                    <button className="hover:text-white">🩶 132 Likes</button>
                                    <button className="hover:text-white"><FiSend className="inline" /> Share</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1 space-y-4 hidden lg:block">
                        {/* About */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">📘 About</h4>
                            <p className="text-sm text-gray-300 mb-2">
                                Learn about crypto and join the community with the best guides and tools.
                            </p>
                            <p className="text-sm text-gray-400 mb-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="text-sm text-gray-400 mb-1">Email: <span className="text-white">abc@gmail.com</span></p>
                            <p className="text-sm text-gray-400 mb-1">Phone: <span className="text-white">908765454</span></p>
                            <p className="text-sm text-gray-400">Location: <span className="text-white">USA</span></p>
                        </div>


                        {/* Our Latest News */}
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">🗞 Our Latest News</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>Bitcoin tops charts again</li>
                                <li>Solana partnerships growing</li>
                                <li>Crypto trends 2025</li>
                            </ul>
                        </div>
                        <div className="bg-[#1c1c1c] p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">📈 Market Trends</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>Bitcoin: $60,000</li>
                                <li>Ethereum: $4,000</li>
                                <li>Litecoin: $200</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-700">
                    © 2025 CryptoVerse. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
