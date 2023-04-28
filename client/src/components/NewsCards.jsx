import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCards = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {news.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-md">
          <img src={article.image} alt={article.title} className="rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2 text-black">{article.title}</h2>
            <p className="text-gray-700 text-base mb-4">{article.description}</p>
            <div className="flex items-center justify-between">
              <Link to={`/article/${article.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
              <span className="text-gray-500 text-sm">{article.publishedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

NewsCards.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsCards;
