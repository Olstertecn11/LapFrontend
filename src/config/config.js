const API_KEY = import.meta.env.VITE_API_KEY;
//export const getApiUrl = path => `http://localhost:3000${path}?api_key=${API_KEY}`;
export const getApiUrl = path => `https://lap-backend-rflw.vercel.app${path}?api_key=${API_KEY}`;
// export const getApiUrl = path => `https://lapbackend.onrender.com${path}?api_key=${API_KEY}`;
