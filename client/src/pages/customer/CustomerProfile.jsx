import { useState } from 'react';
import { useToast } from '../../components/Toast';
import useAuth from '../../hooks/useAuth';
import '../../styles/customer.css';

export default function CustomerProfile() {
  const { user } = useAuth();
  const toast = useToast();
  const [form, setForm] = useState({ name: user.name, email: user.email, phone: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <div className="top"><div><h2>My Profile</h2><p>Update your account details</p></div></div>
      <form className="card profile" onSubmit={(e) => { e.preventDefault(); toast('Profile saved ✓'); }}>
        <div className="avatar">{form.name[0]?.toUpperCase()}</div>
        <div className="form-grid">
          <div><label>Name</label><input value={form.name} onChange={set('name')} /></div>
          <div><label>Email</label><input type="email" value={form.email} onChange={set('email')} /></div>
          <div><label>Phone</label><input value={form.phone} onChange={set('phone')} placeholder="+91" /></div>
        </div>
        <button className="btn g" type="submit">Save changes</button>
      </form>
    </>
  );
}
