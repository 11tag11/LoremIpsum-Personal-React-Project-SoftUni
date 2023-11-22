import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import TopicItem from './topicItem/topicItem';
import styles from './AllTopics.module.css';


const AllTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    topicService.getAll()
    .then(result => setTopics(result))    
    .catch (error => console.error('Error fetching topics:', error.message)) 
  }, []);

  return (
    <div className={styles.sectionSiteMain}>
      <div className={`${styles.container} ${styles.allTopics}`}>
        <div className={styles.topicsHeading}>
          <h1 className={styles.latestTopics}>All Topics</h1>
        </div>
        <div className={`${styles.sectionArticles} ${styles.allArticles}`}>

          {topics.map((topic) => {
            // console.log('Topic ID:', topic._id); 
            return (
              <TopicItem
                _id={topic._id}
                key={topic._id}
                heading={topic.topic.heading}
                question={topic.topic.question}
                author={topic.topic.author}
                createdAt={topic.topic.createdAt}
                likes={topic.topic.likes}
              />
            );
          })}

          {topics.length === 0 && <h3 className={styles.noTopics}>There is no topics yet.</h3>}
        </div>

        <div className={styles.goToTop}>
          {/* correction here, it adds allTopics again... */}
          <Link to="./allTopics"><i className="fa-solid fa-circle-arrow-up"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default AllTopics;