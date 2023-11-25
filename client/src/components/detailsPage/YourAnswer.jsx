import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './YourAnswer.module.css';

const YourAnswer = ({ setAnswers }) => {
  const [answer, setAnswer] = useState('');
  const { topicId } = useParams();
  const authContext = useContext(AuthContext);

  const { auth } = useContext(AuthContext);
  useEffect(() => {
    // access auth._id, auth.username, etc.
    console.log('Current User:', auth);
  }, [auth]);

  const resetAnswerForm = () => {
    setAnswer('');
  };

  useEffect(() => {
    topicService.getOne(topicId)
      .then(result => setAnswers(result))
      .catch(error => console.error('Error fetching topic:', error));

    answerService.getAnswersForTopic(topicId)
      .then(result => setAnswers(result))
      .catch(error => console.error('Error fetching answers:', error)); 
  }, [topicId, setAnswers]);

  useEffect(() => {
    // Check if the user is logged in whenever authContext.user changes
    if (authContext.auth) {
      console.log('User is logged in:', authContext.auth);

      //  add logic here to handle the logged-in user
    }
  }, [authContext.auth]);

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
  };

  const addAnswerHandler = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!authContext.auth) {
      // Redirect or show a modal for login
      console.log('User is not logged in. Redirect or show login modal.');
      return;
    }

    try {
      await answerService.createAnswer(topicId, answer, auth);
      const updatedAnswers = await answerService.getAnswersForTopic(topicId);
      setAnswers(updatedAnswers);
      resetAnswerForm();
    } catch (error) {
      console.error('Failed to add answer:', error);
    }
  };

  return (
    <div className={`${styles.container} ${styles.details}`}>
      <div className={styles.answersSection}>
        <div className={`${styles.sectionArticle} ${styles.answer}`}>
          <section className={styles.article}>
            <form action="">
              <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                <h2 className={`${styles.articleHeading} ${styles.userName} ${styles.yourAnswer}`}>
                  Your answer
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
      <div className={styles.goToTop}>
        <a href="./detailsPage">
          <i className="fa-solid fa-circle-arrow-up" />
        </a>
      </div>
    </div>
  );
};

export default YourAnswer;


























