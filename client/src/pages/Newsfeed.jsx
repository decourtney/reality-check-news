import React, { useState, useEffect } from 'react';
import NewsCards from '../components/NewsCards';
import Ratings from '../components/Ratings';
import api from '../api';

const Newsfeed = ({ user }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const response = await api.get(`/articles?location=${user.location}`);
      setArticles(response.data);
      setLoading(false);
    };
    fetchArticles();
  }, [user.location]);

  const handleRating = async (articleId, rating) => {
    try {
      const response = await api.post(`/articles/${articleId}/ratings`, { rating });
      setArticles(prevArticles => prevArticles.map(article => {
        if (article._id === articleId) {
          return {
            ...article,
            ratings: response.data.ratings,
            userRating: response.data.userRating
          };
        }
        return article;
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Newsfeed</h1>
      <NewsCards articles={articles} loading={loading} />
      {user &&
        <Ratings articles={articles} handleRating={handleRating} />
      }
    </div>
  );
};

export default Newsfeed;
