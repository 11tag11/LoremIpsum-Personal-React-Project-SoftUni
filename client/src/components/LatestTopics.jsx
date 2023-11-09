// 07.11. Successful :)
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatestTopics = () => {
  // Here is the Array, converted from Object, to use MAP func :)
  const [topics, setTopics] = useState([]);


  // Define latestTopics in the component's scope
  const [latestTopics, setLatestTopics] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/latestTopics')
      .then((response) => response.json())
      .then((data) => {
        // Convert the object to an array
        const topicsArray = Object.values(data);

        setTopics(topicsArray);
      });
    
  }, []);

  // First sort in descendant order and than take the last 3
  // articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  // const latestArticles = articles.slice(0, 3);

  useEffect(() => {
    const latestTopicsData = topics.slice(-3);
    setLatestTopics(latestTopicsData);
  }, [topics]);

  return (
    <div className="section-site-main">
      <div className="container">
        <div className="topics-heading">
          <h1 className="latest-topics">Latest Topics</h1>
        </div>
        <div className="section-articles">
          {latestTopics.map((topic, index) => (
            <div className="section-article" key={index}>
              <section className="article">
                <div className="article-content">
                  <h2 className="article-heading">{topic.topic.heading}</h2>
                  <p className="text-area">{topic.topic.question}</p>
                </div>
              </section>
              <section className="article-info">
                <div className="author">
                  <p className="author-name">Creator: {topic.topic.author}</p>
                </div>
                <p className="article-created">{topic.topic.createdAt}</p>
                <div className="article-comments">
                  <p className="comments">Likes: {topic.topic.likes}</p>
                  <p className="read-more">
                    <Link to="/detailsPage">
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </Link>
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




