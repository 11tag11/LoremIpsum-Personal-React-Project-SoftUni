import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { formatDate } from "../../utils/dateUtils";
import useForm from "../../hooks/useForm";
import * as topicService from '../../services/topicService';
import styles from './CreateTopic.module.css';

const formInitialState = {
    heading: '',
    question: '',
};

const CreateTopic = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const { auth } = useContext(AuthContext);
    // useEffect(() => {
    //     console.log('Current User:', auth);
    // }, [auth]);

    const submitHandler = (values) => {
        const valuesAndAdditionalData = {
            ...values,
            author: auth.username,
            _createdOn: formatDate(new Date().toISOString()),
            // _updatedOn: formatDate(new Date().toISOString()),
        }
        topicService.createTopic(valuesAndAdditionalData)
            .then(() => navigate('/latestTopics'))
            .catch(error => {
                setHasServerError(true);
                setServerError(error.message);
                console.log(error.message);
            });
        resetFormHandler();
    };

    const headingValidation = () => {
        if (values.heading.length < 5) {
            setErrors(state => ({
                ...state,
                heading: 'Title should be at least 5 characters'
            }));
        } else if (values.heading.trim() === '') {
            setErrors(state => ({
                ...state,
                heading: 'Title is required'
            }));
        } else {
            if (errors.heading) {
                setErrors(state => ({ ...state, heading: '' }));
            }
        }
    };

    const questionValidation = () => {
        if (values.question.length < 5) {
            setErrors(state => ({
                ...state,
                question: 'Topic description should be at least 5 characters'
            }));
        } else if (values.question.trim() === '') {
            setErrors(state => ({
                ...state,
                question: 'Topic description is required'
            }));
        } else {
            if (errors.question) {
                setErrors(state => ({ ...state, question: '' }));
            }
        }
    };
    
    const { values, onChange, onSubmit } = useForm(submitHandler, formValues);

    return (
        <div className="section-site-main">
            <div className={styles.containerCreate}>
                <div className={styles.newPostHeading}>
                    <h1 className={styles.newHeading}>New Topic</h1>
                </div>
                <div className={styles.sectionArticles}>
                    <div className={styles.sectionArticle}>
                        <section className="new-topic-form">

                            <form className={styles.createForm} action="#" method="POST" onSubmit={onSubmit}>
                                <p className={styles.specific}>Be specific and imagine you’re asking a question to another person, e.g. What are React Hooks good for?</p>
                                <input
                                    type="text"
                                    id="heading"
                                    name="heading"
                                    placeholder="Topic Title"
                                    value={values.heading}
                                    onChange={onChange}
                                    onBlur={headingValidation}
                                />
                                {errors.heading && (
                                    <p className={styles.headingErrorMessage}>{errors.heading}</p>
                                )}
                                <textarea
                                    type="question"
                                    name="question"
                                    id="question"
                                    cols={30}
                                    rows={10}
                                    placeholder="Topic"
                                    value={values.question}
                                    onChange={onChange}
                                    onBlur={questionValidation}
                                />
                                <p className={styles.questionErrorMessage}>{errors.question}</p>

                                <div className={styles.postButtonContainer}>
                                    <button
                                        type="submit"
                                        disabled={(Object.values(errors).some(x => x)
                                            || (Object.values(values).some(x => x == '')))}
                                        className={styles.newPostButton}
                                        >Post</button>
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