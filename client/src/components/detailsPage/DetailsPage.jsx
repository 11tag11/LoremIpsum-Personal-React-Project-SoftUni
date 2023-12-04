import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useParams, Link } from 'react-router-dom';
import DetailsPageAnswers from './DetailsPageAnswers';
import YourAnswer from './YourAnswer';
import DeleteTopic from '../detailsPage/DeleteTopic';
import { formatDate } from '../../utils/dateUtils';
import * as topicService from '../../services/topicService';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
  const { topicId } = useParams();
  const { auth } = useContext(AuthContext);
  const [topic, setTopic] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const topicResult = await topicService.getOne(topicId);
        setTopic(topicResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [topicId]);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  

  return (
    <div className={styles.details}>
      <div className={styles.sectionArticle}>
        <section className={styles.article}>
          <div className={styles.articleContent}>
            <div className={styles.headingLikes}>
              <h2 className={styles.articleHeading}>{topic.heading}</h2>
            </div>
            <p className={`${styles.textArea} ${styles.authorQuestion}`}>{topic.question}</p>
          </div>
        </section>
        <section className={`${styles.articleInfo} ${styles.question}`}>
          <div className={styles.leftInfo}>
            <div className={styles.author}>
              <p className={styles.authorName}>Author: {topic.author}</p>
            </div>
            <p className={styles.articleCreated}>{formatDate(topic._createdOn)}</p>
          </div>
          {auth && auth._id === topic._ownerId && (
            <div className={`${styles.likesDelete} ${styles.right}`}>
              <Link to={`/edit/${topicId}`} className={styles.edit}>
                <i className="fa-solid fa-pen-to-square" />
              </Link>
              <span onClick={handleDeleteClick} className={styles.delete}>
                <i className="fa-solid fa-trash" />
              </span>
            </div>
          )}
        </section>
      </div>
      <DetailsPageAnswers topicId={topicId} auth={auth} />
      {auth ? (
        <YourAnswer topicId={topicId} setTopic={setTopic} />

      ) : (
        <>
          <p className={styles.loginLink}>Please <Link to={`/login`}>Log In</Link> to your account if you want to answer the topic.</p>
          <p className={styles.registerLink}>Don't have an account? Register here: <Link to={`/register`}>Sign Up</Link></p>
        </>
      )}
      {showDeleteModal && (
        <DeleteTopic topicId={topicId} onClose={handleDeleteCancel} />
      )}
    </div>
  );
};

export default DetailsPage;










