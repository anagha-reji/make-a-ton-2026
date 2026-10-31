import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="logo"><i></i>SubTrack</div>
      <div>
        <button className="btn" onClick={() => navigate('/login')}>Log in</button>{' '}
        <button className="btn l" onClick={() => navigate('/register')}>Get started</button>
      </div>
    </div>
  );
}
