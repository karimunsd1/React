import { Home, BarChart2, User, Calendar, Zap, Bell, Settings } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="h-screen w-16 bg-gray-50 flex flex-col items-center justify-between py-4 border-r">

            <div className="flex flex-col items-center space-y-4">
                <div className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
                    S
                </div>


                <div className="flex flex-col items-center gap-6 mt-4 text-slate-600">
                    <button
                        aria-label="Home"
                        className="bg-white p-2 rounded-full shadow text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <Home size={20} />
                    </button>

                    <button
                        aria-label="Bar Chart"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <BarChart2 size={20} />
                    </button>

                    <button
                        aria-label="User"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <User size={20} />
                    </button>

                    <button
                        aria-label="Calendar"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <Calendar size={20} />
                    </button>

                    <button
                        aria-label="Zap"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <Zap size={20} />
                    </button>

                    <button
                        aria-label="Notifications"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <Bell size={20} />
                    </button>

                    <button
                        aria-label="Settings"
                        className="hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        <Settings size={20} />
                    </button>
                </div>

            </div>


            <div className="flex flex-col items-center gap-6">
                <img
                    src="https://i.pravatar.cc/40?img=5"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-yellow-600"
                />

            </div>
        </div>
    );
};

export default Sidebar; 