import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Sidebar({ role, links }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const base = `/${role}`;

  return (
    <aside className="side">
      <div className="logo"><i></i>SubTrack</div>
      {links.map((l) => (
        <NavLink key={l.label} end to={l.to ? `${base}/${l.to}` : base} className={({ isActive }) => 'n' + (isActive ? ' on' : '')}>
          {l.label}
        </NavLink>
      ))}
      <button className="n" onClick={() => { logout(); navigate('/login'); }}>Switch role</button>
      <div className="me">{role[0].toUpperCase() + role.slice(1)} · {user.email}</div>
    </aside>
  );
}
