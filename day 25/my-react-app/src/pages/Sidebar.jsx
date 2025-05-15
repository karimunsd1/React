import { NavLink } from 'react-router-dom';
import {
    FaHome,
    FaUser,
    FaTable,
    FaIcons,
    FaExclamationTriangle,
} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { useState } from 'react';
import coinImage from '../assets/coin.png';

export default function Sidebar() {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

    const linkClasses = ({ isActive }) =>
        `flex items-center cursor-pointer transition-colors duration-200 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-400'
        }`;

    const subLinkClasses = ({ isActive }) =>
        `block ml-6 mt-2 cursor-pointer transition-colors duration-200 ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-400'
        }`;

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#111] border-r border-yellow-500 p-4">
            <div className="text-orange-500 font-bold text-lg mb-6">
                Coin<span className="text-white">eX</span>
            </div>

            <nav className="space-y-4 text-sm">
                {/* Dashboard */}
                <NavLink to="/dashboard" className={linkClasses}>
                    <FaHome className="mr-2" />
                    Dashboard
                </NavLink>

                {/* User Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between text-gray-400 cursor-pointer"
                        onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    >
                        <div className="flex items-center">
                            <FaUser className="mr-2" />
                            User
                        </div>
                        <MdKeyboardArrowDown
                            className={`transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                    {isUserDropdownOpen && (
                        <ul className="space-y-1">
                            <li>
                                <NavLink to="/userprofile" className={subLinkClasses}>
                                    User Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/userlist" className={subLinkClasses}>
                                    User List
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Authentication Dropdown */}
                <div>
                    <div
                        className="flex items-center justify-between text-gray-400 cursor-pointer"
                        onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                    >
                        <div className="flex items-center">
                            <RiShieldUserLine className="mr-2" />
                            Authentication
                        </div>
                        <MdKeyboardArrowDown
                            className={`transition-transform ${isAuthDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </div>
                    {isAuthDropdownOpen && (
                        <ul className="space-y-1">
                            <li>
                                <NavLink to="/signin" className={subLinkClasses}>
                                    Sign In
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup" className={subLinkClasses}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Other Links */}
                <NavLink to="/table" className={linkClasses}>
                    <FaTable className="mr-2" />
                    Table
                </NavLink>

                <NavLink to="/icons" className={linkClasses}>
                    <FaIcons className="mr-2" />
                    Icons
                </NavLink>

                <NavLink to="/error" className={linkClasses}>
                    <FaExclamationTriangle className="mr-2" />
                    Error
                </NavLink>
            </nav>

            {/* Bottom Box */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#222] p-4 rounded-md">
                <img src={coinImage} alt="Vault" className="w-12 mx-auto mb-2" />
                <p className="text-center text-sm text-gray-400 mb-2">
                    Be more secure with Pro Features
                </p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
                    Upgrade Now!
                </button>
            </div>
        </aside>
    );
}
