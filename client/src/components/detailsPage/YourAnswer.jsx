
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm';
import styles from './YourAnswer.module.css';

const formInitialState = {
  answer: '',
};

const answerValidation = (value) => {
  if (value.trim() === '') {
    return 'Answer is required';
  }
  return null;
}

const YourAnswer = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const { topicId } = useParams();
  const [topic, setTopic] = useState({})
  const { auth } = useContext(AuthContext);

  const resetAnswerForm = () => {
    setAnswer('');
  };

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
  };

  const addAnswerHandler = async (e) => {
    e.preventDefault();

    try {
      await answerService.createAnswer(topicId, answer, auth);

      // Fetch the updated topic (including answers) after adding the new answer
    const updatedTopic = await topicService.getOne(topicId);
    setTopic(updatedTopic);

      resetAnswerForm();
      navigate(`/details/${topicId}`);


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
                </div>
                <div className={styles.postButtonContainer}>
                <Link to={`/details/${topicId}`}>
                  <button
                    type="button"
                    className={styles.newPostButton}
                    onClick={addAnswerHandler}
                  >
                    Post
                  </button>
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className={styles.goToTop}>
        <Link href="./detailsPage">
          <i className="fa-solid fa-circle-arrow-up" />
        </Link>
      </div>
    </div>
  );
};

export default YourAnswer;






















