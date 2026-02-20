import React from 'react'
import { Outlet, Navigate, NavLink } from 'react-router-dom'
import { useAdmin } from '../../context/AdminContext'

const AdminLayout = () => {
    const { admin, loading } = useAdmin()

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Loading admin panel...</p>
            </div>
        )
    }

    if (!admin) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

                {/* FIX: Replaced plain <a href> tags with React Router <NavLink>.
                    Using <a href> causes full page reloads, losing React state
                    and breaking the SPA navigation entirely. */}
                <nav className="space-y-4">
                    <NavLink
                        to="/admin/home"
                        className={({ isActive }) =>
                            `block hover:underline ${isActive ? 'font-bold underline' : ''}`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/admin/courses"
                        className={({ isActive }) =>
                            `block hover:underline ${isActive ? 'font-bold underline' : ''}`
                        }
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `block hover:underline ${isActive ? 'font-bold underline' : ''}`
                        }
                    >
                        Users
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <Outlet />
            </main>

        </div>
    )
}

export default AdminLayout
