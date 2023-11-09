// 07.11. Successful :)
import React from 'react';

const LatestTopics = ({ articles }) => {
  // Here is the Array, converted from Object, to use MAP func :)
  console.log(articles);


  // First sort in descendant order and than take the last 3
  // articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // const latestArticles = articles.slice(0, 3);


  const latestArticles = articles.slice(-3);
  return (
    <div className="section-site-main">
      <div className="container">
        <div className="topics-heading">
          <h1 className="latest-topics">Latest Topics</h1>
        </div>
        <div className="section-articles">
          {latestArticles.map((article, index) => (
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

export default LatestTopics;




