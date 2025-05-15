import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaBell } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';

const mockData = [
    ['Airi Satou', 'Accountant', 'Tokyo', 33, '2020/01/28', '$162,700'],
    ['Jane Cooper', 'Engineer', 'India', 45, '2020/01/28', '$162,700'],
    ['Wade Warren', 'Accountant', 'China', 38, '2020/01/28', '$162,700'],
    ['Guy Hawkins', 'Engineer', 'USA', 27, '2020/01/28', '$162,700'],
    ['Jacob Jones', 'Accountant', 'USA', 46, '2020/01/28', '$162,700'],
    ['Cody Fisher', 'Engineer', 'Tokyo', 30, '2020/01/28', '$162,700'],
    ['Wade Warren', 'Accountant', 'India', 23, '2020/01/28', '$162,700'],
    ['Jane Cooper', 'Engineer', 'Japan', 51, '2020/01/28', '$162,700'],
    ['Guy Hawkins', 'Accountant', 'USA', 39, '2020/01/28', '$162,700'],
    ['Jacob Jones', 'Engineer', 'Tokyo', 43, '2020/01/28', '$162,700'],
];

export default function UserList() {
    return (
        <div className="min-h-screen bg-[#161618] text-white font-sans">
            {/* Top Navbar */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h1 className="text-lg font-bold"> Dashboard</h1>
                <div className="flex items-center gap-3">
                    <button className="bg-orange-500 px-4 py-1 rounded text-sm">Buy / Sell</button>
                    <button className="bg-orange-600 px-4 py-1 rounded text-sm">+ Add New Crypto</button>
                    <FaBell className="text-gray-400 text-lg" />
                    <div className="flex items-center gap-2">
                        <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />

                    </div>
                    <div>
                        <div className="font-semibold">Wade Warren</div>
                        <div className="text-gray-400 text-xs">Super Admin</div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="p-4">
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full rounded-md bg-gray-800 border border-gray-700 placeholder-gray-500 text-sm"
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="p-4">
                <div className="bg-gray-900 p-4 rounded-xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Basic Datatable</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-400 uppercase border-b border-gray-700">
                                <tr>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Position</th>
                                    <th className="px-4 py-2">Office</th>
                                    <th className="px-4 py-2">Age</th>
                                    <th className="px-4 py-2">Start date</th>
                                    <th className="px-4 py-2">Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockData.map(([name, position, office, age, date, salary], idx) => (
                                    <tr
                                        key={idx}
                                        className="border-b border-gray-800 hover:bg-gray-800"
                                    >
                                        <td className="px-4 py-2">{name}</td>
                                        <td className="px-4 py-2">{position}</td>
                                        <td className="px-4 py-2">{office}</td>
                                        <td className="px-4 py-2">{age}</td>
                                        <td className="px-4 py-2">{date}</td>
                                        <td className="px-4 py-2">{salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Footer + Pagination */}
                    <div className="flex justify-between items-center text-gray-400 text-xs mt-4">
                        <p>Showing 1 to 10 of 67 entries</p>
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5, 6].map((page) => (
                                <button
                                    key={page}
                                    className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded"
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-500 p-4 border-t border-gray-700">
                © 2025 CoinXTrade. Made with ❤️ by XOMIC Design.
            </footer>
        </div>
    );
}
