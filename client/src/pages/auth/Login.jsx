import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../styles/auth.css';

const ROLES = ['admin', 'staff', 'customer'];

export default function Login() {
  const [role, setRole] = useState('customer');
  const [email, setEmail] = useState('customer@subtrack.io');
  const { login } = useAuth();
  const navigate = useNavigate();

  const pickRole = (r) => { setRole(r); setEmail(`${r}@subtrack.io`); };
  const submit = (e) => { e.preventDefault(); login(role, email); navigate(`/${role}`); };

  return (
    <div className="lg">
      <form className="lbox" onSubmit={submit}>
        <div className="logo dark-text"><i></i>SubTrack</div>
        <h2>Welcome back</h2>
        <div className="tabs">
          {ROLES.map((r) => (
            <button type="button" key={r} className={r === role ? 'on' : ''} onClick={() => pickRole(r)}>
              {r[0].toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" defaultValue="Demo@1234" required />
        <button className="btn g full" type="submit">Sign in as {role}</button>
        <p className="foot">
          <Link to="/forgot-password">Forgot password?</Link> · <Link to="/register">Register</Link> · <Link to="/">Home</Link>
        </p>
      </form>
    </div>
  );
}
