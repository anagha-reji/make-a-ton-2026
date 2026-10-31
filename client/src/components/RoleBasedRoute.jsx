import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// Lets only the given role in; anyone else is sent to their own dashboard.
export default function RoleBasedRoute({ role }) {
  const { user } = useAuth();
  return user.role === role ? <Outlet /> : <Navigate to={`/${user.role}`} replace />;
}
