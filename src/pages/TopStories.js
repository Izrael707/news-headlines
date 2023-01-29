import React, { useEffect, useState } from "react";
import { Headline } from "../components/Headline";

export const TopStories = () => {
  const [topNews, setTopNews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.thenewsapi.com/v1/news/top?locale=gb&language=en&api_token=8bj0O5ExwLwHBF4EhSJmNmrGMGeSdxBYQN512R7h"
    )
      .then((res) => res.json())
      .then((result) => setTopNews(result.data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : topNews.length === 0 ? (
        <div className="d-flex text-info justify-content-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Headline newsArray={topNews} />
      )}
    </div>
  );
};
