export default function StatCard({ label, value, delta }) {
  return (
    <div className="card">
      <h4>{label}</h4>
      <div className="big sm">{value}<span className="up">{delta}</span></div>
    </div>
  );
}
