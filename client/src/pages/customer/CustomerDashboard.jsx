import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import RevenueChart from "../../components/RevenueChart";
import StatusBreakdown from "../../components/StatusBreakdown";
import useFetch from "../../hooks/useFetch";
import { getCustomerStats } from "../../services/subscriptionService";
import { formatCurrency } from "../../utils/formatCurrency";
import { useAuth } from "../../context/AuthContext";

export default function CustomerDashboard() {
  const { user } = useAuth();
  const { data: s, loading } = useFetch(getCustomerStats);

  if (loading || !s) return <p className="muted">Loading...</p>;

  return (
    <>
      <PageHeader 
        title="Customer Portal" 
        subtitle={`Welcome back, ${user?.name || 'Customer'}`} 
      />
      <div className="grid">
        <StatCard tone="hero" label="Active subscriptions" value={s.activeSubscriptions} />
        <StatCard label="Next renewal" value={s.nextRenewal} sub={s.nextRenewalPlan} />
        <StatCard label="Outstanding" value={formatCurrency(s.outstanding)} />
        <StatCard label="Total paid" value={formatCurrency(s.totalPaid)} />
      </div>
      <div className="grid" style={{ marginTop: '20px' }}>
        <RevenueChart data={s.revenue30d} growth={s.revenueGrowth} title="Payment activity (30d)" />
        <StatusBreakdown items={s.statusBreakdown} />
      </div>
    </>
  );
}