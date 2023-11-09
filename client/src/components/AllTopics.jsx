import React from 'react';
import { useState, useEffect } from 'react';


const AllTopics = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/latestTopics')
      .then((response) => response.json())
      .then((data) => {
        const articlesArray = Object.values(data);
        setArticles(articlesArray);
      });
  },[]);

  return (
    <div className="section-site-main">
      <div className="container all-topics">
        <div className="topics-heading">
          <h1 className="latest-topics">All Topics</h1>
        </div>
        <div className="section-articles all-articles">
          {articles.map((article, index) => (
            <div className="section-article" key={index}>
              <section className="article">
                <div className="article-content">
                  <h2 className="article-heading">{article.heading}</h2>
                  <p className="text-area">{article.question}</p>
                </div>
              </section>
              <section className="article-info">
                <div className="author">
                  <p className="author-name">Creator: {article.author}</p>
                </div>
                <p className="article-created">{article.createdAt}</p>
                <div className="article-comments">
                  <p className="comments">Comments: {article.comments}</p>
                  <p className="read-more">
                    <a href={article.link}>
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </a>
                  </p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTopics;