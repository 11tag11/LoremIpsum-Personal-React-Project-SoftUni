
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LatestTopics = () => {
  const [topics, setTopics] = useState([]);
  const [latestTopics, setLatestTopics] = useState([]);

  useEffect(() => {
    // Fetch topics
    fetch('http://localhost:3030/jsonstore/latestTopics')
      .then((response) => response.json())
      .then((data) => {
        const topicsArray = Object.values(data);
        setTopics((prevTopics) => [...prevTopics, ...topicsArray]); // Use functional update
      });
  }, []); // Empty dependency array to fetch topics only once

  const fetchUsernamesAndUpdateTopics = () => {
    // Fetch user data
    fetch('http://localhost:3030/jsonstore/myUsers')
      .then((response) => response.json())
      .then((userData) => {
        // Map user ID to username
        const userIdToUsername = {};
        Object.values(userData).forEach((user) => {
          userIdToUsername[user._id] = user.username;
        });

        // Update topics with username
        const topicsWithUsername = topics.map((topic) => ({
          ...topic,
          topic: {
            ...topic.topic,
            username: userIdToUsername[topic.topic.userId],
          },
        }));

        // Set latest topics
        const latestTopicsData = topicsWithUsername.slice(-3).reverse();
        setLatestTopics(latestTopicsData);
      });
  };

  useEffect(() => {
    fetchUsernamesAndUpdateTopics();
  }, [topics]); // This dependency should be carefully managed

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
                  <p className="author-name">Creator: {topic.topic.username}</p>
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