import moment from 'moment'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteAnswer from '../detailsPage/DeleteAnswer';
import YourAnswer from './YourAnswer'; 
import * as answerService from '../../services/answerService';
import styles from './DetailsPageAnswers.module.css';

const DetailsPageAnswers = ({ topicId, auth }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deletingAnswerId, setDeletingAnswerId] = useState(null);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAnswers();
    }, [topicId]);

    const fetchAnswers = () => {
        answerService.getAnswersForTopic(topicId)
            .then(result => setAnswers(result))
            .catch(error => console.error('Error fetching answers:', error))
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
            const updatedAnswers = answers.filter((answer) => answer._id !== deletingAnswerId);
            setAnswers(updatedAnswers);
        } catch (error) {
            console.error('Error deleting answer', error);
        } finally {
            setShowDeleteModal(false);
            setDeletingAnswerId(null);
        }
    };

    const handleAnswerAdded = () => {
        fetchAnswers();
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
            {auth && (
                <YourAnswer
                    topicId={topicId}
                    onAnswerAdded={handleAnswerAdded}
                />
            )}
            {!auth && (
                <>
                    <p className={styles.loginLink}>
                        Please <Link to={`/login`}>Sign In</Link> to your account if you want to answer the topic.
                    </p>
                    <p className={styles.registerLink}>
                        Don't have an account? Sign Up here: <Link to={`/register`}>Sign Up</Link>
                    </p>
                </>
            )}
            {showDeleteModal && (
                <DeleteAnswer
                    answerId={deletingAnswerId}
                    onClose={handleDeleteCancel}
                    topicId={topicId}
                    onDeleteSuccess={handleDeleteConfirmation} 
                />
            )}
        </div>
    );
};

export default DetailsPageAnswers;


