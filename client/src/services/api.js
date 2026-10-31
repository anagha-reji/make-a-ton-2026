// Thin fetch wrapper. Pages currently use src/data/mockData.js;
// switch them to these calls when the backend is available.
const BASE = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const token = JSON.parse(localStorage.getItem('sms_user') || 'null')?.token;
  const res = await fetch(BASE + path, {
    headers: { 'Content-Type': 'application/json', ...(token && { Authorization: `Bearer ${token}` }) },
    ...options,
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).message || 'Request failed');
  return res.json();
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path) => request(path, { method: 'DELETE' }),
};
