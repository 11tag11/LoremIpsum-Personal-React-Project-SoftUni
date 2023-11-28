import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


import {Link} from 'react-router-dom';
import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import styles from './YourAnswer.module.css';

const YourAnswer = ({ setTopicState }) => {
  const navigate = useNavigate();
  // const history = useHistory();
  const [answer, setAnswer] = useState('');
  const { topicId } = useParams();
  const authContext = useContext(AuthContext);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    // access auth._id, auth.username, etc.
    // console.log('Current User:', auth);
  }, [auth]);

  const resetAnswerForm = () => {
    setAnswer('');
  };

  useEffect(() => {
    topicService.getOne(topicId)
      .then(result => setTopicState((prevState) => ({ ...prevState, topic: result })))
      .catch(error => console.error('Error fetching topic:', error));

    answerService.getAnswersForTopic(topicId)
      .then(result => setTopicState((prevState) => ({ ...prevState, answers: result })))
      .catch(error => console.error('Error fetching answers:', error)); 
  }, [topicId, setTopicState]);

 

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
  };

  const addAnswerHandler = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!auth) {
      // Redirect or show a modal for login
      console.log('User is not logged in. Redirect or show login modal.');
      return;
    }

    try {
      await answerService.createAnswer(topicId, answer, auth);
      // const updatedAnswers = await answerService.getAnswersForTopic(topicId);
      // setAnswers(updatedAnswers);

      const updatedAnswers = await answerService.getAnswersForTopic(topicId);
      setTopicState(prevState => ({ ...prevState, answers: updatedAnswers }));
      setAnswer('');
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


























