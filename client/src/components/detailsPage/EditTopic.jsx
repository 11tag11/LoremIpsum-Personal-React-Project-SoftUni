import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { formatDate } from "../../utils/dateUtils";
import * as topicService from '../../services/topicService';
import styles from './EditTopic.module.css';

const EditTopic = () => {
    const { auth } = useContext(AuthContext);
    const { topicId } = useParams();
    const [heading, setHeading] = useState('');
    const [question, setQuestion] = useState('');
    const [headingError, setHeadingError] = useState('');
    const [questionError, setQuestionError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        topicService.getOne(topicId)
            .then(result => {
                setHeading(result.heading);
                setQuestion(result.question);
            })
            .catch(error => console.error('Error fetching topic:', error));
    }, [topicId, auth._id]);

    const resetEditForm = () => {
        setHeading('');
        setQuestion('');
        setHeadingError('');
        setQuestionError('');
    };

    const headingChangeHandler = (e) => {
        setHeading(e.target.value);
        setHeadingError('');
    };

    const questionChangeHandler = (e) => {
        setQuestion(e.target.value);
        setQuestionError('');
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!heading || heading.trim().length < 5) {
            setHeadingError('Topic Title should be at least 5 characters');
            return;
        }

        if (!question || question.trim().length < 5) {
            setQuestionError('Topic description should be at least 5 characters');
            return;
        }

        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);

        const updatedTopicData = {
            heading,
            question,
            _updatedOn: formattedDate,
            author: auth.username,
        };

        topicService.editTopic(topicId, updatedTopicData)
            .then(() => {
                navigate(`/details/${topicId}`);
                resetEditForm();
            })
            .catch(error => console.log('Topic did not update!', error));
    };

    return (
        <div className="section-site-main">
            <div className={styles.containerCreate}>
                <div className={styles.newPostHeading}>
                    <h1 className={styles.newHeading}>Edit Topic</h1>
                </div>
                <div className={styles.sectionArticles}>
                    <div className={styles.sectionArticle}>
                        <section className="new-topic-form">

                            <form className={styles.createForm} action="#" method="">
                                <p className={styles.specific}>Be specific and imagine you’re asking a question to another person, e.g. What are React Hooks good for?</p>
                                <input
                                    type="text"
                                    id="heading"
                                    value={heading}
                                    onChange={headingChangeHandler}
                                    name="heading"
                                    placeholder="Topic Title"
                                />
                                {headingError && (
                                    <p className={styles.headingErrorMessage}>{headingError}</p>
                                )}
                                <textarea
                                    type="question"
                                    name="question"
                                    id="question"
                                    value={question}
                                    onChange={questionChangeHandler}
                                    cols={30}
                                    rows={10}
                                    placeholder="Topic"
                                />
                                {questionError && (
                                    <p className={styles.questionErrorMessage}>{questionError}</p>
                                )}
                                <div className={styles.postButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.newPostButton}
                                        onClick={submitHandler}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTopic;






