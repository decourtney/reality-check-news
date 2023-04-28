import React, { useState, useEffect } from 'react';
import { getArticles } from '../components/API';
import NewsCards from '../components/NewsCards';
import Search from '../components/Search';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await getArticles(`/search?q=${query}`);
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Reality Check News</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading articles...</p>}
      {!loading && articles.length === 0 && <p>No articles found</p>}
      {!loading && articles.length > 0 && (
        <div>
          {articles.map((article) => (
            <NewsCards key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
