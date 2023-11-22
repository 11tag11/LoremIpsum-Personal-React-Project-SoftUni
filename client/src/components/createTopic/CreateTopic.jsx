import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as topicService from '../../services/topicService';
import styles from './CreateTopic.module.css';

const CreateTopic = () => {

    const [heading, setHeading] = useState('');
    const [question, setQuestion] = useState('');
    const navigate = useNavigate();

    const resetNewPostForm = () => {
        setHeading('');
        setQuestion('');
    };

    const headingChangeHandler = (e) => {
        setHeading(e.target.value);
    };

    const questionChangeHandler = (e) => {
        setQuestion(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        // const userId = localStorage.getItem('userId');
        const topicData = {
            heading,
            question,
            // author: userId,
            // userId
        };

        topicService.createTopic(topicData)
        .then(() => navigate('/allTopics'))
        .catch (error => console.log('Post did not created!', error)) 
            // Here will be err notification later
        resetNewPostForm();
    };

    return (
        <div className="section-site-main">
            <div className={styles.containerCreate}>
                <div className={styles.newPostHeading}>
                    <h1 className={styles.newHeading}>New Topic</h1>
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
                                    placeholder="Topic Title" />
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
                                <div className={styles.postButtonContainer}>
                                    <button
                                        type="button"
                                        className={styles.newPostButton}
                                        onClick={submitHandler}>Post</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreateTopic;