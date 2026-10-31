// SHARED file – combines the route lists of both developers.
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ProtectedRoute from '../components/ProtectedRoute';
import RoleBasedRoute from '../components/RoleBasedRoute';
import DashboardLayout from '../components/DashboardLayout';
import { customerLinks, customerRoutes } from './customerRoutes';
import { staffLinks, staffRoutes } from './staffRoutes';
import { adminLinks, adminRoutes } from './adminRoutes';

const sections = [
  { role: 'customer', links: customerLinks, routes: customerRoutes },
  { role: 'staff', links: staffLinks, routes: staffRoutes },
  { role: 'admin', links: adminLinks, routes: adminRoutes },
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route element={<ProtectedRoute />}>
        {sections.map(({ role, links, routes }) => (
          <Route key={role} element={<RoleBasedRoute role={role} />}>
            <Route path={`/${role}`} element={<DashboardLayout role={role} links={links} />}>
              {routes.map((r) => <Route key={r.path || 'index'} {...r} />)}
            </Route>
          </Route>
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
