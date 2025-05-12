import { Home, BarChart2, User, Calendar, Zap, Bell, Settings, Menu, } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-50 h-16 flex items-center justify-between px-4 border-b shadow z-50">
                <div className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white w-9 h-9 flex items-center justify-center rounded-full font-bold text-base">
                    S
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-slate-700 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Desktop Sidebar - Thinner Version */}
            <div className="hidden md:flex h-screen w-12 bg-gray-50 flex-col items-center justify-between py-4 border-r fixed left-0 top-0 z-40">
                <div className="flex flex-col items-center space-y-4">
                    <div className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white w-9 h-9 flex items-center justify-center rounded-full font-bold text-base">
                        S
                    </div>

                    <div className="flex flex-col items-center gap-5 mt-4 text-slate-600">
                        <button
                            aria-label="Home"
                            className="bg-white p-1.5 rounded-full shadow text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <Home size={18} />
                        </button>
                        <button
                            aria-label="Bar Chart"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <BarChart2 size={18} />
                        </button>
                        <button
                            aria-label="User"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <User size={18} />
                        </button>
                        <button
                            aria-label="Calendar"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <Calendar size={18} />
                        </button>
                        <button
                            aria-label="Zap"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <Zap size={18} />
                        </button>
                        <button
                            aria-label="Notifications"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <Bell size={18} />
                        </button>
                        <button
                            aria-label="Settings"
                            className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                        >
                            <Settings size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <img
                        src="https://i.pravatar.cc/40?img=5"
                        alt="User"
                        className="w-8 h-8 rounded-full border-2 border-yellow-600"
                    />
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-t shadow px-4 py-4 flex flex-col gap-4 z-40">
                    <button className="flex items-center gap-2 text-slate-700">
                        <Home size={18} /> Home
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <BarChart2 size={18} /> Analytics
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <User size={18} /> Profile
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <Calendar size={18} /> Calendar
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <Zap size={18} /> Activity
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <Bell size={18} /> Notifications
                    </button>
                    <button className="flex items-center gap-2 text-slate-700">
                        <Settings size={18} /> Settings
                    </button>
                </div>
            )}
        </>
    );
};

export default Sidebar;
