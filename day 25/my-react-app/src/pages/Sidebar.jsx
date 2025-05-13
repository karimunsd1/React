import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaTable, FaIcons, FaExclamationTriangle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { useState } from 'react';
import coinImage from '../assets/coin.png';

export default function Sidebar() {
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [authStep, setAuthStep] = useState(0);
    const [activeLink, setActiveLink] = useState("");

    const linkClasses = (linkName) =>
        `flex items-center cursor-pointer ${activeLink === linkName ? 'text-orange-500 font-semibold' : 'text-gray-400'
        }`;

    const subLinkClasses = ({ isActive }) =>
        `block ml-6 mt-2 cursor-pointer ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-400'
        }`;

    const handleAuthNavigation = () => {
        setAuthStep((prevStep) => (prevStep === 0 ? 1 : 0));
        setActiveLink("authentication");
    };

    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-[#111] border-r border-yellow-500 p-4">
            <div className="text-orange-500 font-bold text-lg mb-6">
                Coin<span className="text-white">eX</span>
            </div>

            <nav className="space-y-4 text-sm">
                <NavLink
                    to="/dashboard"
                    className={linkClasses("dashboard")}
                    onClick={() => setActiveLink("dashboard")}
                >
                    <FaHome className="mr-2" />
                    Dashboard
                </NavLink>

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
                            className={`transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </div>
                    {isUserDropdownOpen && (
                        <ul className="space-y-1">
                            <li>
                                <NavLink to="/user/profile" className={subLinkClasses}>
                                    User Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/user/list" className={subLinkClasses}>
                                    User List
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>

                <NavLink
                    to={authStep === 0 ? "/signup" : "/signin"}
                    className={linkClasses("authentication")}
                    onClick={handleAuthNavigation}
                >
                    <RiShieldUserLine className="mr-2" />
                    Authentication
                </NavLink>

                <NavLink to="/table" className={linkClasses("table")}>
                    <FaTable className="mr-2" />
                    Table
                </NavLink>

                <NavLink to="/icons" className={linkClasses("icons")}>
                    <FaIcons className="mr-2" />
                    Icons
                </NavLink>

                <NavLink to="/error" className={linkClasses("error")}>
                    <FaExclamationTriangle className="mr-2" />
                    Error
                </NavLink>
            </nav>

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
