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
    const [errorMessage, setErrorMessage] = useState('');
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
        setErrorMessage('');
    };

    const answerChangeHandler = (e) => {
        setAnswer(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Add validation
        if (answer.trim() === '' || answer.length < 5) {
            // Display an error message
            setErrorMessage('Answer must be at least 5 characters');
            return;
        }

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
            .catch(error => {
                console.log('Answer did not update!', error);
                setErrorMessage('Error updating answer. Please try again.');
            });

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
                                {errorMessage && (
                                    <p className={styles.errorMessage}>{errorMessage}</p>
                                )}
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



// // keep
// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from '../../contexts/AuthContext';
// import { formatDate } from "../../utils/dateUtils";
// import * as answerService from '../../services/answerService';

// import styles from './EditAnswer.module.css';


// const EditAnswer = () => {
//     const { auth } = useContext(AuthContext);
//     const { answerId } = useParams();
//     const [answer, setAnswer] = useState('');
//     const [topicId, setTopicId] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         console.log('Auth object:', auth);
//         answerService.getAnswerById(answerId)
//             .then(result => {
//                 setAnswer(result.answer);
//                 setTopicId(result.topicId);
//             })
//             .catch(error => console.error('Error fetching topic:', error));
//     }, [answerId, auth._id]);

//     const resetEditForm = () => {
//         setAnswer('');
//     };

//     const answerChangeHandler = (e) => {
//         setAnswer(e.target.value);
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         const currentDate = new Date();
//         const formattedDate = formatDate(currentDate);

//         const updatedAnswerData = {
//             answer,
//             _updatedOn: formattedDate,
//             username: auth.username,
//             topicId: topicId,
//             userId: auth._id
//         };

//         answerService.editAnswer(answerId, updatedAnswerData)
//             .then(() => navigate(`/details/${topicId}`))
//             .catch(error => console.log('Answer did not update!', error));

//         resetEditForm();
//     };

//     return (
//         <div className="section-site-main">
//             <div className={styles.containerCreate}>
//                 <div className={styles.newPostHeading}>
//                     <h1 className={styles.newHeading}>Edit Answer</h1>
//                 </div>
//                 <div className={styles.sectionArticles}>
//                     <div className={styles.sectionArticle}>
//                         <section className="new-topic-form">

//                             <form className={styles.createForm} action="#" method="">
//                                 <p className={styles.specific}>Be specific and imagine you’re asking a question to another person, e.g. What are React Hooks good for?</p>
                                
//                                 <textarea
//                                     type="text"
//                                     name="answer"
//                                     id="answer"
//                                     value={answer}
//                                     onChange={answerChangeHandler}
//                                     cols={30}
//                                     rows={10}
//                                     placeholder="Topic"
//                                 />
//                                 <div className={styles.postButtonContainer}>
//                                     <button
//                                         type="button"
//                                         className={styles.newPostButton}
//                                         onClick={submitHandler}>Save</button>
//                                 </div>
//                             </form>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default EditAnswer;

// import React, { useEffect, useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from '../../contexts/AuthContext';
// import { formatDate } from "../../utils/dateUtils";
// import * as answerService from '../../services/answerService';
// import useForm from "../../hooks/useForm";

// import styles from './EditAnswer.module.css';

// const EditAnswer = () => {
//     const { auth } = useContext(AuthContext);
//     const { answerId } = useParams();
//     const [topicId, setTopicId] = useState('');
//     const navigate = useNavigate();

//     // Set the initial values here
//     const initialValues = {
//         answer: '',
//     };

//     const submitHandler = async () => {
//         const currentDate = new Date();
//         const formattedDate = formatDate(currentDate);

//         const updatedAnswerData = {
//             answer: values.answer,
//             _updatedOn: formattedDate,
//             username: auth.username,
//             topicId: topicId,
//             userId: auth._id
//         };

//         answerService.editAnswer(answerId, updatedAnswerData)
//             .then(() => navigate(`/details/${topicId}`))
//             .catch(error => console.log('Answer did not update!', error));

//         resetEditForm();
//     };

//     const { values, errors, onChange, onSubmit } = useForm(
//         submitHandler,
//         initialValues,
//         { answer: 'Answer is required' }
//     );

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await answerService.getAnswerById(answerId);
//                 setTopicId(result.topicId);
//                 // Set the answer value in the form after fetching data
//                 if (result.answer) {
//                     onChange({ target: { name: 'answer', value: result.answer } });
//                 }
//             } catch (error) {
//                 console.error('Error fetching topic:', error);
//             }
//         };
    
//         fetchData();
//     }, [answerId, onChange]);

//     const resetEditForm = () => {
//         onChange({ target: { name: 'answer', value: initialValues.answer } });
//     };

//     return (
//         <div className="section-site-main">
//             <div className={styles.containerCreate}>
//                 <div className={styles.newPostHeading}>
//                     <h1 className={styles.newHeading}>Edit Answer</h1>
//                 </div>
//                 <div className={styles.sectionArticles}>
//                     <div className={styles.sectionArticle}>
//                         <section className="new-topic-form">
//                             <form className={styles.createForm} action="#" method="">
//                                 <p className={styles.specific}>Be specific and imagine you’re asking a question to another person, e.g. What are React Hooks good for?</p>
                                
//                                 <textarea
//                                     type="text"
//                                     name="answer"
//                                     id="answer"
//                                     value={values.answer || ''}
//                                     onChange={onChange}
//                                     cols={30}
//                                     rows={10}
//                                     placeholder="Topic"
//                                 />
//                                 {errors.answer && (
//                                     <p className={styles.answerErrorMessage}>{errors.answer}</p>
//                                 )}
//                                 <div className={styles.postButtonContainer}>
//                                     <button
//                                         type="button"
//                                         className={styles.newPostButton}
//                                         onClick={onSubmit}
//                                     >
//                                         Save
//                                     </button>
//                                 </div>
//                             </form>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditAnswer;
