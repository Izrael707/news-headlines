import React from "react";
import { Headline } from "../components/Headline";
import { HomeCarousel } from "../components/HomeCarousel";

export const Home = ({ allNews, error }) => {
  return (
    <div className="py-4">
      {error ? (
        <h1>{error}</h1>
      ) : allNews.length === 0 ? (
        <div className="d-flex text-info justify-content-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="w-100 h-100 py-3">
            <HomeCarousel newsArray={allNews} />
          </div>
          <div>
            <Headline newsArray={allNews} />
          </div>
        </>
      )}
    </div>
  );
};
