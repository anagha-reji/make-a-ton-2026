import { statusSummary } from '../data/mockData';

export default function StatusSummary() {
  return (
    <div className="card">
      <h4>Subscription status</h4>
      <div className="bar">
        {statusSummary.map((s) => <span key={s.label} style={{ flex: s.count, background: s.color }} />)}
      </div>
      {statusSummary.map((s) => (
        <div className="leg" key={s.label}><span>{s.label}</span><b>{s.count}</b></div>
      ))}
    </div>
  );
}
