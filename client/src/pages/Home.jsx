import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import { getPlans } from '../services/subscriptionService';

export default function Home() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlans().then((res) => setPlans(res)).catch(() => {});
  }, []);

  return (
    <div className="landing-page" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Navbar */}
      <nav className="navbar" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
          <span className="logo-mark" style={{ width: '28px', height: '28px', background: 'var(--lime)', borderRadius: '6px', display: 'inline-block' }} />
          SubTrack
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link to="/login" className="btn" style={{ padding: '8px 16px' }}>Log in</Link>
          <Link to="/login" className="btn btn-primary" style={{ padding: '8px 16px' }}>Get started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
        <div className="chip" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '20px', border: '1px solid var(--line)', color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
          ● For every business with recurring revenue
        </div>
        <h1 className="hero-hl" style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '20px' }}>
          Unlock the power of <br />
          <em style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--lime)', fontWeight: 400 }}>subscription billing</em>
        </h1>
        <p className="lead" style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
          Manage customers, plans, invoices and payments in one place — automatically and without missed renewals.
        </p>
        <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button onClick={() => navigate('/login')} className="btn btn-primary">Try the demo ↗</button>
          <a href="#pricing" className="btn">View plans</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2.2rem', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '40px' }}>
          Everything you need, <em style={{ color: 'var(--lime)' }}>in one platform</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Recurring billing</h3>
            <p className="muted" style={{ fontSize: '0.9rem' }}>Invoices generated on schedule, never duplicated.</p>
          </div>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Role-based access</h3>
            <p className="muted" style={{ fontSize: '0.9rem' }}>Admin, Staff and Customer dashboards.</p>
          </div>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Discounts & taxes</h3>
            <p className="muted" style={{ fontSize: '0.9rem' }}>Automatic calculation on every invoice.</p>
          </div>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Live reports</h3>
            <p className="muted" style={{ fontSize: '0.9rem' }}>Revenue, outstanding and overdue at a glance.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{ maxWidth: '1000px', margin: '60px auto 100px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '2.2rem', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '40px' }}>
          Simple <em style={{ color: 'var(--lime)' }}>pricing plans</em>
        </h2>
        <div className="plans" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} onSubscribe={() => navigate('/login')} />
          ))}
        </div>
      </section>
    </div>
  );
}