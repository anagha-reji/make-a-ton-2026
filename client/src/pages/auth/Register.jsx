import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../styles/auth.css';

// PRD rule: min 8 chars, upper, lower, special character.
const strong = (p) => p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[^A-Za-z0-9]/.test(p);

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!strong(form.password)) return setError('Password needs 8+ characters with upper, lower and a special character.');
    login('customer', form.email);
    navigate('/customer');
  };

  return (
    <div className="lg">
      <form className="lbox" onSubmit={submit}>
        <div className="logo dark-text"><i></i>SubTrack</div>
        <h2>Create your account</h2>
        <label>Full name</label>
        <input value={form.name} onChange={set('name')} required />
        <label>Email</label>
        <input type="email" value={form.email} onChange={set('email')} required />
        <label>Password</label>
        <input type="password" value={form.password} onChange={set('password')} required />
        {error && <p className="err">{error}</p>}
        <button className="btn g full" type="submit">Register</button>
        <p className="foot">Already registered? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
}
