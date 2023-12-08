import React, { useState, useContext } from 'react';
import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './YourAnswer.module.css';

const YourAnswer = ({ topicId, onAnswerAdded }) => {
  const [answer, setAnswer] = useState('');
  const { auth } = useContext(AuthContext);
  const [error, setError] = useState('');

  const resetAnswerForm = () => {
    setAnswer('');
    setError('');
  };

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

  const addAnswerHandler = async (e) => {
    e.preventDefault();

    if (!answer || answer.trim().length < 5) {
      setError('Answer should be at least 5 characters');
      return;
    }

    answerService.createAnswer(topicId, answer, auth);
    resetAnswerForm();
    // Call that buddy answers list
    onAnswerAdded(); 
  };

  return (
    <div className={`${styles.container} ${styles.details}`}>
      <div className={styles.answersSection}>
        <div className={`${styles.sectionArticle} ${styles.answer}`}>
          <section className={styles.article}>
            <form action="">
              <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                <h2 className={`${styles.articleHeading} ${styles.userName} ${styles.yourAnswer}`}>
                  {`${auth.username}'s`} answer:
                </h2>
                <div className={styles.answerArea}>
                  <textarea
                    name="answer"
                    id="answer"
                    cols={30}
                    rows={10}
                    value={answer}
                    onChange={answerChangeHandler}
                  />
                  {error && <p className={styles.answerErrorMessage}>{error}</p>}
                </div>
                <div className={styles.postButtonContainer}>
                  <button
                    type="button"
                    className={styles.newPostButton}
                    onClick={addAnswerHandler}
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default YourAnswer;







