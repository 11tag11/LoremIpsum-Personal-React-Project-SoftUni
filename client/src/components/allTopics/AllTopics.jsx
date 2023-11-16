import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import TopicItem from './topicItem/topicItem';

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

          {topics.map(topic => (
            <TopicItem
              _id={topic._id}
              key={topic._id}
              heading={topic.topic.heading}
              question={topic.topic.question}
              author={topic.topic.author}
              createdAt={topic.topic.createdAt}
              likes={topic.topic.likes} />
          ))}

          {topics.length === 0 && <h3 className='no-topics'>There is no topics yet.</h3>}
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