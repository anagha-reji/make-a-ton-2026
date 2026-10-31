import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DashboardOverview from '../../components/DashboardOverview';
import { stats } from '../../data/mockData';
import '../../styles/staff.css';

const quick = [['Create quotation', 'quotations'], ['Manage invoices', 'invoices'], ['Record payment', 'payments']];

export default function StaffDashboard() {
  return (
    <>
      <PageHeader title="Staff Dashboard" subtitle="Good morning – here’s what’s happening today" />
      <div className="quick">
        {quick.map(([label, to]) => <Link key={to} to={`/staff/${to}`}>{label} →</Link>)}
      </div>
      <DashboardOverview stats={stats.staff} />
    </>
  );
}
