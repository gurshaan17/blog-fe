import axios from 'axios';
const API_URL = 'http://localhost:4000'; 

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const googleLogin = async (token) => {
  const response = await axios.post(`${API_URL}/auth/google`, { idToken: token });
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const createBlog = async (title, content) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/blog/create`, { title, content }, {
    headers: { Authorization: `${token}` }
  });
  return response.data;
};