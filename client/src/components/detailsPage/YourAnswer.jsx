import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';
import styles from './YourAnswer.module.css';

const YourAnswer = ({ setAnswers }) => {
  const [answer, setAnswer] = useState('');

  const { topicId } = useParams();

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

  const answerChangeHandler = (e) => {
    setAnswer(e.target.value);
  };

  const addAnswerHandler = async (e) => {
    e.preventDefault();

    answerService.createAnswer(topicId, answer)
    .then(() => answerService.getAnswersForTopic(topicId))
    .then(updatedAnswers => setAnswers(updatedAnswers))
    .then(() => {
      console.log('Answer is created:', answer);
      resetAnswerForm();
    })
    .catch(error => console.error('Failed to add answer:', error));
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
























// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import * as topicService from '../../services/topicService';
// import * as answerService from '../../services/answerService';

// const YourAnswer = () => {
//   const [topic, setTopic] = useState({});
//   const [answers, setAnswers] = useState([]);
//   const [answer, setAnswer] = useState('');
//   const { topicId } = useParams();

//   const resetAnswerForm = () => {
//     setAnswer('');
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const topicData = await topicService.getOne(topicId);
//         setTopic(topicData.topic);

//         const answersData = await answerService.getAnswersForTopic(topicId);
//         setAnswers(answersData);
//       } catch (error) {
//         console.error('Error fetching topic and answers:', error);
//       }
//     };

//     fetchData();
//   }, [topicId]);

//   const answerChangeHandler = (e) => {
//     setAnswer(e.target.value);
//   };

//   const addAnswerHandler = async (e) => {
//     e.preventDefault();

//     try {
//       // Create the answer
//       await answerService.createAnswer(topicId, answer);

//       // Refresh the answers
//       const updatedAnswers = await answerService.getAnswersForTopic(topicId);
//       setAnswers(updatedAnswers);

//       console.log('Answer is created:', answer);
//       resetAnswerForm();
//     } catch (error) {
//       console.error('Failed to add answer:', error);
//     }
//   };

//   return (
//     <div className="container details">
//       <div className="answers-section">
//         <div className="section-article answer">
//           <section className="article">
//             <form action="">
//               <div className="article-content user-answer">
//                 <h2 className="article-heading user-name your-answer">Your answer</h2>
//                 <div className="answer-area">
//                   <textarea
//                     name="answer"
//                     id=""
//                     cols={30}
//                     rows={10}
//                     value={answer}
//                     onChange={answerChangeHandler}
//                   />
//                 </div>
//                 <div className="post-button-container">
//                   <button
//                     type="button"
//                     className="new-post-button"
//                     onClick={addAnswerHandler}
//                   >
//                     Post
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </section>
//         </div>
        
//       </div>
//       <div className="go-to-top">
//         <a href="./detailsPage">
//           <i className="fa-solid fa-circle-arrow-up" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default YourAnswer;
