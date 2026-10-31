import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  return (
    <div className="lg">
      <form className="lbox" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <div className="logo dark-text"><i></i>SubTrack</div>
        <h2>Reset password</h2>
        <label>Registered email</label>
        <input type="email" required />
        {sent && <p className="ok">If the email exists, a reset link has been sent.</p>}
        <button className="btn g full" type="submit">Send reset link</button>
        <p className="foot"><Link to="/login">Back to login</Link></p>
      </form>
    </div>
  );
}
