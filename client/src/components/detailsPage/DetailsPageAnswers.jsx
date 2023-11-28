import React, { useEffect, useState, useContext } from 'react';
import * as answerService from '../../services/answerService';
import { formatDate } from '../../utils/dateUtils';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DeleteAnswer from '../deleteAnswer/DeleteAnswer';
import EditAnswer from './EditAnswer';

import styles from './DetailsPageAnswers.module.css';

const DetailsPageAnswers = ({ topicState }) => {
    const [answers, setAnswers] = useState([]);
    // console.log('Topic State:', topicState);
    const { auth } = useContext(AuthContext);

    const { _id: topicId } = topicState.topic;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletingAnswerId, setDeletingAnswerId] = useState(null);
    const [deletedAnswerId, setDeletedAnswerId] = useState(null); // New state
    // console.log('Received Topic ID:', topicId);

    useEffect(() => {
        answerService.getAnswersForTopic(topicId)
            .then(result => {
                setAnswers(result);
                console.log('Answers:', result);
            })
            .catch(error => console.error('Error fetching answers:', error));
    }, [topicId, topicState, deletedAnswerId]);

    const handleEditAnswer = (selectedAnswer) => {
        setEditingAnswer(selectedAnswer);
    };

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
        //   setDeletedAnswerId(deletingAnswerId); // Trigger re-fetch when an answer is deleted
        } catch (error) {
          console.error('Error deleting answer', error);
        } finally {
          setShowDeleteModal(false);
          setDeletingAnswerId(null);
        }
      };


    return (
        <div className={`${styles.details} ${styles.answersSection}`}>
            {answers && Array.isArray(answers) && answers.length > 0 ? (
                <>
                    {answers.map((answer) => (
                        <div className={`${styles.sectionArticle} ${styles.answer}`} key={answer._id}>
                            {/* {console.log('Answer ID:', answer._id)} */}
                            <section className={styles.article}>
                                <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                                    <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.username}</h2>
                                    {/* <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.author}</h2> */}
                                    <p className={styles.textArea}>{answer.answer}</p>
                                </div>
                            </section>
                            <section className={`${styles.articleInfo} ${styles.question}`}>
                                <div className={styles.leftInfo}>
                                    <p className={styles.articleCreated}>{formatDate(answer._createdOn)}</p>
                                </div>
                                <div className={`${styles.likesDelete} ${styles.right}`}>
                                    {auth && auth._id === answer.userId && (
                                        <>
                                            <Link to={`/edit/answer/${answer._id}`} className={styles.edit} onClick={() => handleEditAnswer(answer)}>
                                                <i className="fa-solid fa-pen-to-square" />
                                            </Link>
                                            <a href="#" className={styles.delete} onClick={() => handleDeleteAnswer(answer._id)}>
                                                <i className="fa-solid fa-trash" />
                                            </a>
                                        </>
                                    )}
                                    {auth && auth._id !== answer.userId &&(
                                        <a href="#" className={styles.likes}>
                                        <i className="fa-solid fa-thumbs-up" />
                                    </a>
                                    )}
                                    
                                </div>
                            </section>
                        </div>
                    ))}
                    {/* {console.log('Answers array:', answers)} */}
                </>
            ) : (
                <p>There is no answers for this question yet.</p>
            )}

            {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteAnswer
          answerId={deletingAnswerId}
          onDelete={handleDeleteConfirmation} 
          onClose={handleDeleteCancel}
        />
      )}
        </div>
    );
}

export default DetailsPageAnswers;

