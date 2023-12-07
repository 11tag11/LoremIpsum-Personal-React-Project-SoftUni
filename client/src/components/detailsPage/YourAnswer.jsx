import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './YourAnswer.module.css';

const YourAnswer = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const { topicId } = useParams();
  const [error, setError] = useState('');
  const { auth } = useContext(AuthContext);

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
    navigate(`/AllTopics`);
    // navigate(`/details/${topicId}`);
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



//keep
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import * as topicService from '../../services/topicService';
// import * as answerService from '../../services/answerService';
// import { AuthContext } from '../../contexts/AuthContext';
// import { useNavigate } from "react-router-dom";
// import styles from './YourAnswer.module.css';


// const YourAnswer = () => {
// 	const navigate = useNavigate();
// 	const [answer, setAnswer] = useState('');
// 	const { topicId } = useParams();
// 	const [topic, setTopic] = useState({})
// 	const { auth } = useContext(AuthContext);

// 	const resetAnswerForm = () => {
// 		setAnswer('');
// 	};

// 	const answerChangeHandler = (e) => {
// 		setAnswer(e.target.value);
// 	};

// 	const addAnswerHandler = async (e) => {
// 		e.preventDefault();

// 		answerService.createAnswer(topicId, answer, auth);
// 		const updatedTopic = topicService.getOne(topicId);
// 		setTopic(updatedTopic);
// 		resetAnswerForm();
// 		navigate(`/latestTopics`);
// 		// navigate(`/details/${topicId}`);



// 	};

// 	return (
// 		<div className={`${styles.container} ${styles.details}`}>
// 			<div className={styles.answersSection}>
// 				<div className={`${styles.sectionArticle} ${styles.answer}`}>
// 					<section className={styles.article}>
// 						<form action="">
// 							<div className={`${styles.articleContent} ${styles.userAnswer}`}>
// 								<h2 className={`${styles.articleHeading} ${styles.userName} ${styles.yourAnswer}`}>
// 									{`${auth.username}'s`} answer:
// 								</h2>
// 								<div className={styles.answerArea}>
// 									<textarea
// 										name="answer"
// 										id="answer"
// 										cols={30}
// 										rows={10}
// 										value={answer}
// 										onChange={answerChangeHandler}
// 									/>
// 								</div>
// 								<div className={styles.postButtonContainer}>
// 									{/* <Link to={`/details/${topicId}`}> */}
// 									{/* <Link to={`/latestTopics`}> */}
// 									<button
// 										type="button"
// 										className={styles.newPostButton}
// 										onClick={addAnswerHandler}
// 									>
// 										Post
// 									</button>
// 									{/* </Link> */}
// 								</div>
// 							</div>
// 						</form>
// 					</section>
// 				</div>
// 			</div>
// 			<div className={styles.goToTop}>
// 				<Link href="./detailsPage">
// 					<i className="fa-solid fa-circle-arrow-up" />
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default YourAnswer;