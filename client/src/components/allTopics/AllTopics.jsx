import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as topicService from '../../services/topicService';

const AllTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsArray = await topicService.getAll();
        setTopics(topicsArray.reverse());
      } catch (error) {
        console.error('Error fetching topics:', error.message);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="section-site-main">
      <div className="container all-topics">
        <div className="topics-heading">
          <h1 className="latest-topics">All Topics</h1>
        </div>
        <div className="section-articles all-articles">
          {topics.map((topic, index) => (
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
                    {/* here CORRECTION AFTER I GOT ID'S */}
                    <Link to="/detailsPage">
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          ))};
        </div>
        <div className="go-to-top">
          {/* correction here, it adds allTopics again... */}
          <Link to="./allTopics"><i className="fa-solid fa-circle-arrow-up"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default AllTopics;