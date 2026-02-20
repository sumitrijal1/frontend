import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminProvider } from './context/AdminContext.jsx'
import ProtectedRoute from './context/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Admin from './Admin.jsx'
import Home from './pages/admin/Home.jsx'
import Courses from './pages/admin/courses.jsx'
import Profile from './pages/admin/Profile.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }>
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<Navigate to="/admin/home" replace />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AdminProvider>
    </BrowserRouter>
  )
}

export default App