import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailsPageAnswers from './DetailsPageAnswers';
import YourAnswer from './YourAnswer';
import * as topicService from '../../services/topicService';
// import * as answerService from '../../services/answerService';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
  const [topic, setTopic] = useState({});
  const [answers, setAnswers] = useState([]);

  const { topicId } = useParams();

  useEffect(() => {
    topicService.getOne(topicId)
      .then(result => setTopic(result))

    
    .catch(error => console.error('Error fetching answers:', error));
}, [topicId]);

console.log('Topic ID:', topicId);
console.log('Topic:', topic);

  return (
    <div className={styles.details}>
      <div className={styles.sectionArticle}>
        <section className={styles.article}>
          <div className={styles.articleContent}>
            <div className={styles.headingLikes}>
              <h2 className={styles.articleHeading}>{topic.heading}</h2>
              <div className={styles.circle}>
                <p className={styles.likesCount}>{topic.likes}</p>
              </div>
            </div>

            <p className={`${styles.textArea} ${styles.authorQuestion}`}>{topic.question}</p>
          </div>
        </section>
        <section className={`${styles.articleInfo} ${styles.question}`}>
          <div className={styles.leftInfo}>
            <div className={styles.author}>
              <p className={styles.authorName}>Author: {topic.author}</p>
            </div>
            <p className={styles.articleCreated}>{topic.createdAt}</p>
          </div>
          <div className={`${styles.likesDelete} ${styles.right}`}>
            <a href="./editPost.html" className={styles.edit}>
              <i className="fa-solid fa-pen-to-square" />
            </a>
            <a href="#" className={styles.likes}>
              <i className="fa-solid fa-thumbs-up" />
            </a>
            <a href="#" className={styles.delete}>
              <i className="fa-solid fa-trash" />
            </a>
          </div>
        </section>
      </div>

      {/* Passes answers to DetailsPageAnswers directly */}
      <DetailsPageAnswers topicId={topicId} />

      <YourAnswer
        topicId={topicId}
        setAnswers={setAnswers}
      />
    </div>
  );
};

export default DetailsPage;
