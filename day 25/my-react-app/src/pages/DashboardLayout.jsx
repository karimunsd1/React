import { useState } from 'react'
import Sidebar from './Sidebar'


export default function DashboardLayout() {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <div className="flex h-screen bg-black text-white">
            {showSidebar && <Sidebar />}

            <main className="p-4 overflow-auto">
                <Dashboard />
            </main>
        </div>

    )
}
