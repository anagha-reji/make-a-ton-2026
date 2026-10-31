import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import DashboardOverview from '../../components/DashboardOverview';
import useAuth from '../../hooks/useAuth';
import { stats } from '../../data/mockData';
import '../../styles/customer.css';

export default function CustomerDashboard() {
  const { user } = useAuth();
  return (
    <>
      <PageHeader title="Customer Dashboard" subtitle={`Welcome back, ${user.name} – here’s your subscription overview`} />
      <div className="cta-banner">
        <div><b>Want more from SubTrack?</b><span>Browse plans and subscribe in a few clicks.</span></div>
        <Link className="btn l" to="/customer/plans">Subscribe now</Link>
      </div>
      <DashboardOverview stats={stats.customer} chartTitle="Spending – last 30 days" />
    </>
  );
}
