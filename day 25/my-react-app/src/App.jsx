import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Success from './pages/Success'
import DashboardLayout from './pages/DashboardLayout'
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard'
export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="DashboardLayout" element={<DashboardLayout />} />
        </Routes>
      </main>
    </div>
  )
}