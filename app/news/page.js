"use client"; 

import React from "react"; 
import NewsFeed from '../components/newsfeed'; 

const NewsPage = () => {
  return (
    <div className="content py-5">
      <div className="container">
        <div className="row">
          <div className="main col-12">
            <h1 className="section-title">Latest News</h1>
            {/* newsfeed component */}
            <NewsFeed /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
