import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useParams, Link } from 'react-router-dom';
import DetailsPageAnswers from './DetailsPageAnswers';
import YourAnswer from './YourAnswer';
import DeleteTopic from '../deleteTopic/DeleteTopic';
import { formatDate } from '../../utils/dateUtils';

import * as topicService from '../../services/topicService';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
  const [topicState, setTopicState] = useState({
    topic: {},
    answers: [],
  });

  const { topicId } = useParams();
  const { auth } = useContext(AuthContext);
  const { _ownerId } = topicState.topic;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    topicService.getOne(topicId)
      .then(result => setTopicState(prevState => ({ ...prevState, topic: result })))
      .catch(error => console.error('Error fetching answers:', error));
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
              <h2 className={styles.articleHeading}>{topicState.topic.heading}</h2>
              {/* <div className={styles.circle}>
                <p className={styles.likesCount}>{topicState.topic.likes}</p>
              </div> */}
            </div>
            <p className={`${styles.textArea} ${styles.authorQuestion}`}>{topicState.topic.question}</p>
          </div>
        </section>
        <section className={`${styles.articleInfo} ${styles.question}`}>
          <div className={styles.leftInfo}>
            <div className={styles.author}>
              <p className={styles.authorName}>Author: {topicState.topic.author}</p>
            </div>
            <p className={styles.articleCreated}>{formatDate(topicState.topic._createdOn)}</p>
          </div>
          {auth && auth._id === _ownerId && (
            <div className={`${styles.likesDelete} ${styles.right}`}>
              <Link to={`/edit/${topicId}`} className={styles.edit}>
                <i className="fa-solid fa-pen-to-square" />
              </Link>
              {/* <span className={styles.likes}>
              <i className="fa-solid fa-thumbs-up" />
            </span> */}
              <span onClick={handleDeleteClick} className={styles.delete}>
                <i className="fa-solid fa-trash" />
              </span>
            </div>
          )}
        </section>
      </div>
      <DetailsPageAnswers topicState={topicState} />
      {auth ? (
        <YourAnswer
          topicId={topicId}
          topicState={topicState}
          setTopicState={setTopicState}
        />
      ) : (
        <p>Please log in to post an answer.</p>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteTopic
          topicId={topicId}
          onClose={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default DetailsPage;
