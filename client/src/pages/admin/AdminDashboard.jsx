import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DashboardOverview from '../../components/DashboardOverview';
import { stats } from '../../data/mockData';
import '../../styles/admin.css';

const shortcuts = [['Staff', 'staff'], ['Products', 'products'], ['Plans', 'plans'], ['Discounts', 'discounts'], ['Taxes', 'taxes'], ['Reports', 'reports']];

export default function AdminDashboard() {
  return (
    <>
      <PageHeader title="Admin Dashboard" subtitle="Good morning – here’s what’s happening today" />
      <div className="shortcuts">
        {shortcuts.map(([label, to]) => <Link key={to} to={`/admin/${to}`}>{label}</Link>)}
      </div>
      <DashboardOverview stats={stats.admin} />
    </>
  );
}
