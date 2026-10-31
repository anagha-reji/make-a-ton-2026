import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import StatusSummary from './StatusSummary';
import DataTable from './DataTable';
import { tables } from '../data/mockData';

export default function DashboardOverview({ stats, chartTitle = 'Revenue – last 30 days' }) {
  return (
    <>
      <div className="grid g4">{stats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <div className="two">
        <div className="card">
          <h4>{chartTitle}</h4>
          <div className="big">33.09%<span className="up">3.5%</span></div>
          <RevenueChart />
        </div>
        <StatusSummary />
      </div>
      <div className="card" style={{ marginTop: 14 }}>
        <h4>Recent invoices</h4>
        <DataTable {...tables.invoices} />
      </div>
    </>
  );
}
