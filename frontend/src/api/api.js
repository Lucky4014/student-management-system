import axios from 'axios';

// ✅ Base URL — backend ka address
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// ✅ Request Interceptor — har request ke pehle log karo
API.interceptors.request.use((req) => {
  console.log(`📤 API Request: ${req.method.toUpperCase()} ${req.baseURL}${req.url}`);
  return req;
});

// ✅ Response Interceptor — response aane par log karo
API.interceptors.response.use(
  (res) => {
    console.log(`📥 API Response: Status ${res.status}`, res.data);
    return res;
  },
  (error) => {
    console.error(`❌ API Error: ${error.response?.status} — ${error.message}`);
    return Promise.reject(error);
  }
);

export default API;
