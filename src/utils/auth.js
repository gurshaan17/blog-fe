import axios from 'axios';
const API_URL = 'http://localhost:4000'; 

export const isLoggedIn = () => {
  return localStorage.getItem('token') !== null;
};

export const getUserEmail = () => {
  return localStorage.getItem('userEmail');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  if (response.data && response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userEmail', email);
  }
  return response.data;
};

export const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { email, password });
  if (response.data && response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userEmail', email);
  }
  return response.data;
};

export const googleLogin = async (token) => {
  const response = await axios.post(`${API_URL}/auth/google`, { idToken: token });
  if (response.data && response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userEmail', response.data.email);
  }
  return response.data;
};

export const getUserId = async (email) => {
  const response = await axios.get(`${API_URL}/auth/id`, { params: { email } });
  return response.data.userId;
};

export const createBlog = async (title, content) => {
  const token = getToken();
  const email = getUserEmail();
  if (!token || !email) {
    throw new Error('User not authenticated');
  }
  try {
    const userId = await getUserId(email);
    const response = await axios.post(`${API_URL}/blog/create`, { title, content, author: userId }, {
      headers: { Authorization: `${token}` }
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
      throw new Error('Session expired. Please log in again.');
    }
    throw error;
  }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
  };