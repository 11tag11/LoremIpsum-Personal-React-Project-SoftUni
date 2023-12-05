import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { formatDate } from "../../utils/dateUtils";
import * as answerService from '../../services/answerService';
import styles from './EditAnswer.module.css';

const EditAnswer = () => {
    const { auth } = useContext(AuthContext);
    const { answerId } = useParams();
    const [answer, setAnswer] = useState('');
    const [topicId, setTopicId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Auth object:', auth);
        answerService.getAnswerById(answerId)
            .then(result => {
                setAnswer(result.answer);
                setTopicId(result.topicId);
            })
            .catch(error => console.error('Error fetching topic:', error));
    }, [answerId, auth._id]);

    const resetEditForm = () => {
        setAnswer('');
    };

    const answerChangeHandler = (e) => {
        setAnswer(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);

        const updatedAnswerData = {
            answer,
            _updatedOn: formattedDate,
            username: auth.username,
            topicId: topicId,
            userId: auth._id
        };

        answerService.editAnswer(answerId, updatedAnswerData)
            .then(() => navigate(`/details/${topicId}`))
            .catch(error => console.log('Answer did not update!', error));

        resetEditForm();
    };

    return (
        <div className="section-site-main">
            <div className={styles.containerCreate}>
                <div className={styles.newPostHeading}>
                    <h1 className={styles.newHeading}>Edit Answer</h1>
                </div>
                <div className={styles.sectionArticles}>
                    <div className={styles.sectionArticle}>
                        <section className="new-topic-form">

                            <form className={styles.createForm} action="#" method="">
                                <p className={styles.specific}>Be specific and imagine you’re asking a question to another person, e.g. What are React Hooks good for?</p>
                                
                                <textarea
                                    type="text"
                                    name="answer"
                                    id="answer"
                                    value={answer}
                                    onChange={answerChangeHandler}
                                    cols={30}
                                    rows={10}
                                    placeholder="Topic"
                                />
                                <div className={styles.postButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.newPostButton}
                                        onClick={submitHandler}>Save</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditAnswer;