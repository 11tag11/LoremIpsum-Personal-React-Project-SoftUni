import React from 'react';
import { useState, useEffect } from 'react';
import * as topicService from '../../services/topicService';
import TopicItem from './topicItem/TopicItem';
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

          {topics.reverse().map((topic) => {
            // console.log('Topic ID:', topic._id); 
            return (
              <TopicItem
                _id={topic._id}
                key={topic._id}
                heading={topic.heading}
                question={topic.question}
                author={topic.author}
                _createdOn={topic._createdOn}
                _updatedOn={topic._updatedOn}
              />
            );
          })}

          {topics.length === 0 && <h3 className={styles.noTopics}>There is no topics yet.</h3>}
        </div>

        
      </div>
    </div>
  );
};

export default AllTopics;