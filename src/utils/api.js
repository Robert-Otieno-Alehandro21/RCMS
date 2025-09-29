export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

export async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, options);
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
}
