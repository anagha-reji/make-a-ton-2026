import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlanCard from '../components/PlanCard';
import { plans } from '../data/mockData';
import { formatCurrency } from '../utils/formatCurrency';
import '../styles/landing.css';

const features = [
  ['🔁', 'Recurring billing', 'Invoices generated on schedule, never duplicated.'],
  ['👥', 'Role-based access', 'Admin, Staff and Customer dashboards.'],
  ['🏷️', 'Discounts & taxes', 'Automatic calculation on every invoice.'],
  ['📊', 'Live reports', 'Revenue, outstanding and overdue at a glance.'],
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <Navbar />
        <span className="pill">● For every business with recurring revenue</span>
        <h1>Unlock the power of <span className="serif">subscription billing</span></h1>
        <p>Manage customers, plans, invoices and payments in one place – automatically and without missed renewals.</p>
        <button className="btn l" onClick={() => navigate('/login')}>Try the demo ↗</button>{' '}
        <button className="btn" onClick={() => document.getElementById('plans').scrollIntoView()}>View plans</button>
        <div className="mock">
          <b style={{ fontSize: 20 }}>Good morning, Admin</b>
          <div className="grid g3" style={{ marginTop: 14 }}>
            <div className="card dark"><h4>Total earnings</h4><div className="big">{formatCurrency(842500)}</div></div>
            <div className="card"><h4>Active subscriptions</h4><div className="big">1,284</div></div>
            <div className="card"><h4>Outstanding</h4><div className="big">{formatCurrency(96300)}</div></div>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="stats-row">
          <div><b>1,284+</b><span>Active subscriptions</span></div>
          <div><b>99.9%</b><span>Invoices on time</span></div>
          <div><b>3</b><span>Role-based dashboards</span></div>
        </div>
      </div>

      <div className="sec flush">
        <h2>Everything you need, <em>in one platform</em></h2>
        <div className="grid g4" style={{ marginTop: 20 }}>
          {features.map(([icon, title, text]) => (
            <div className="feat" key={title}><div className="ic">{icon}</div><b>{title}</b><span>{text}</span></div>
          ))}
        </div>
      </div>

      <div className="sec flush" id="plans">
        <h2>Simple <em>pricing plans</em></h2>
        <div className="grid g3" style={{ marginTop: 20 }}>
          {plans.map((p, i) => <PlanCard key={p.name} plan={p} popular={i === 1} onSubscribe={() => navigate('/login')} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}
