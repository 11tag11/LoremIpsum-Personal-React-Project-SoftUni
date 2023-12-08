import moment from 'moment';
import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DeleteAnswer from '../detailsPage/DeleteAnswer';
import * as answerService from '../../services/answerService';
import styles from './DetailsPageAnswers.module.css';

const DetailsPageAnswers = ({ topicId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingAnswerId, setDeletingAnswerId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    answerService.getAnswersForTopic(topicId)
      .then(result => setAnswers(result))
      .catch(error => console.error('Error fetching answers:', error))
  }, [topicId]);

  const handleDeleteAnswer = (answerId) => {
    setShowDeleteModal(true);
    setDeletingAnswerId(answerId);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setDeletingAnswerId(null);
  };

  const handleDeleteConfirmation = async () => {
    try {
      await answerService.remove(deletingAnswerId);
      const updatedAnswers = answers.filter((answer) => answer._id !== deletingAnswerId);
      setAnswers(updatedAnswers);
    } catch (error) {
      console.error('Error deleting answer', error);
    } finally {
      setShowDeleteModal(false);
      setDeletingAnswerId(null);
    }
  };

  const formatTimeAgo = (date) => {
    return moment(date).fromNow();
  };

  return (
    <div className={`${styles.details} ${styles.answersSection}`}>
      {answers.length > 0 ? (
        <>
          {answers.map((answer) => (
            <div className={`${styles.sectionArticle} ${styles.answer}`} key={answer._id}>
              <section className={styles.article}>
                <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                  <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.username}</h2>
                  <p className={styles.textArea}>{answer.answer}</p>
                </div>
              </section>
              <section className={`${styles.articleInfo} ${styles.question}`}>
                <div className={styles.leftInfo}>
                  <p className={styles.articleCreated}>Created: {formatTimeAgo(answer._createdOn)}</p>
                </div>
                <div className={`${styles.likesDelete} ${styles.right}`}>
                  {auth && auth._id === answer.userId && (
                    <>
                      <Link to={`/edit/answer/${answer._id}`} className={styles.edit}>
                        <i className="fa-solid fa-pen-to-square" />
                      </Link>
                      <a href="#" className={styles.delete} onClick={() => handleDeleteAnswer(answer._id)}>
                        <i className="fa-solid fa-trash" />
                      </a>
                    </>
                  )}
                </div>
              </section>
            </div>
          ))}
        </>
      ) : (
        <p className={styles.noAnswers}>There are no answers for this topic yet.</p>
      )}
      {showDeleteModal && (
        <DeleteAnswer
          answerId={deletingAnswerId}
          onClose={handleDeleteCancel}
          topicId={topicId}
          onDelete={handleDeleteConfirmation}
        />
      )}
    </div>
  );
};

export default DetailsPageAnswers;