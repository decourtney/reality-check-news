import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (email, password) => {
  return api.post('/login', { email, password });
};

export const getArticles = () => {
  return api.get('/articles');
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`);
};

export const createArticle = (article) => {
  return api.post('/articles', article);
};

export const updateArticle = (id, article) => {
  return api.put(`/articles/${id}`, article);
};

export const deleteArticle = (id) => {
  return api.delete(`/articles/${id}`);
};
export default api;