
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LatestTopics.module.css';
import * as topicService from '../../services/topicService';

// import Loader from '../shared/Loader';


const LatestTopics = () => {
  const [latestTopics, setLatestTopics] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    topicService.getLastThree()
      .then(result => setLatestTopics(result))
      .catch(error => console.log(error))
    // .finally(() => setIsLoading(false));

  }, []); // Empty dependency array to fetch topics only once

  return (
    <div className={styles.sectionSiteMain}>
      <div className={styles.container}>
        <div className={styles.topicsHeading}>
          <h1 className={styles.latestTopics}>Latest Topics</h1>
        </div>
        <div className={styles.sectionArticles}>

          {/* {isLoading && < Loader />} */}

          {latestTopics.map((topic, index) => (
            <div className={styles.sectionArticle} key={index}>
              <section className={styles.article}>
                <div className={styles.articleContent}>
                  <h2 className={styles.articleHeading}>{topic.topic.heading}</h2>
                  <p className={styles.textArea}>{topic.topic.question}</p>
                </div>
              </section>
              <section className={styles.articleInfo}>
                <div className={styles.author}>
                  <p className={styles.authorName}>Creator: {topic.topic.username}</p>
                </div>
                <p className={styles.articleCreated}>{topic.topic.createdAt}</p>
                <div className={styles.articleComments}>
                  <p className={styles.comments}>Likes: {topic.topic.likes}</p>
                  <p className={styles.readMore}>
                    <Link to={`/latestTopics/${topic._id}`}>
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          ))}

          {latestTopics.length === 0 && <h3 className={styles.noTopics}>There is no topics yet.</h3>}

        </div>
      </div>
    </div>
  );
};

export default LatestTopics;