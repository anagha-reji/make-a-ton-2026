import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardLayout({ role, links }) {
  return (
    <div className="app">
      <Sidebar role={role} links={links} />
      <main><Outlet /></main>
    </div>
  );
}
