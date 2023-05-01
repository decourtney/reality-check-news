import React, { useState, useEffect } from "react";
// import { getArticles } from '../components/API';
import NewsCards from "../components/NewsCards";
import Search from "../components/Search";

import { QUERY_ARTICLE, QUERY_ARTICLES, QUERY_SEARCH } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { loadingAll, dataAll } = useQuery(QUERY_ARTICLES);
  
  const { loading, data } = useQuery(QUERY_SEARCH, {
    variables: { searchTerm },
  });

  if(!loading)
    console.log(data, searchTerm)

  useEffect(() => {
    if (dataAll) {
      setArticles(dataAll);
      console.log(articles);
    }
  }, [dataAll]);

  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     try {
  //       const response = await getArticles();
  //       setArticles(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchArticles();
  // }, []);

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <div>
        <h1 className="mx-10 text-3xl font-bold inline border-b-4 border-yellow-500">
          Trending Articles
        </h1>
        <Search handleSearch={handleSearch} />
        {loading && <p className="p-2">Loading articles...</p>}
        {!loading && articles.length === 0 && <p>No articles found</p>}
        {!loading && articles.length > 0 && (
          <div>
            {articles.map((article) => (
              <NewsCards key={article.id} articles={article} />
            ))}
          </div>
        )}
        <div></div>
      </div>
    </>
  );
};

export default Articles;
