import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const KEY = 'sms_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  });

  // Demo login – replace with a real API call when the backend is ready.
  const login = (role, email) => {
    const u = { role, email, name: email.split('@')[0] };
    localStorage.setItem(KEY, JSON.stringify(u));
    setUser(u);
    return u;
  };

  const logout = () => {
    localStorage.removeItem(KEY);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
