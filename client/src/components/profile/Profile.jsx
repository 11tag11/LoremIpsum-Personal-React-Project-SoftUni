import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import * as answerService from '../../services/answerService';

import { AuthContext } from '../../contexts/AuthContext';

import styles from './Profile.module.css';

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [createdTopics, setCreatedTopics] = useState([]);
    const [createdAnswers, setCreatedAnswers] = useState([]);

    useEffect(() => {
        if (auth) {
            topicService.getTopicsForUser(auth._id)
                .then((result) => {
                    setCreatedTopics(result);
                    console.log(result);
                })
                .catch((error) => console.log(error));
        }
    }, [auth]);

    useEffect(() => {
        if (auth) {
            answerService.getAnswersForUser(auth._id)
                .then((result) => {
                    setCreatedAnswers(result);
                    console.log(result);
                })
                .catch((error) => console.log(error))
        }
    }, [auth]);

    return (
        <div className={styles.sectionSiteMain}>
            <div className={styles.containerProfile}>
                <div className={styles.userHeading}>
                    <h1 className={styles.heading}>User profile</h1>
                </div>
                <div className={styles.sectionArticleProfile}>
                    <div className={styles.profileMedia}>
                        <img src="./assets/user_img.jpg" alt="user" />
                    </div>
                    <section className={styles.userInfo}>
                        <p className={styles.email}>Email: {auth?.email || 'N/A'}</p>
                        <p className={styles.username}>Username: {auth?.username || 'N/A'}</p>
                        <p className={styles.createdTopics}>
                            Created topics: {createdTopics.length || 0}{' '}
                            {createdTopics.map((topic) => (
                                <Link key={topic._id} to={`/details/${topic._id}`}>
                                    {topic.heading}
                                </Link>
                            ))}
                        </p>
                        <p className={styles.answers}>
                            Answers: {createdAnswers.length || 0}{' '}
                            {createdAnswers.map((answer) => (
                                <Link key={answer._id} to={`/details/${answer.topicId}`}>
                                    Answer on {answer.topicId}
                                </Link>
                            ))}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;



//keep
// import React from 'react';
// import { useState, useEffect, useContext } from 'react';
// import * as topicService from '../../services/topicService';
// import * as answerService from '../../services/answerService';

// import { AuthContext } from '../../contexts/AuthContext';

// import styles from './Profile.module.css';
// const Profile = () => {
//     const { auth } = useContext(AuthContext);
//     const [createdTopics, setCreatedTopics] = useState([]);
//     const [createdAnswers, setCreatedAnswers] = useState([]);


//     useEffect(() => {
//         if (auth) {
//             topicService.getTopicsForUser(auth._id)
//                 .then((result) => {
//                     setCreatedTopics(result);
//                     console.log(result);
//                 })
//                 .catch((error) => console.log(error));
//         }
//     }, [auth]);

//     useEffect(() => {
//         if (auth) {
//             answerService.getAnswersForUser(auth._id)
//                 .then((result) => {
//                     setCreatedAnswers(result);
//                     console.log(result);
//                 })
//                 .catch((error) => console.log(error))
//         }
//     }, [auth]);



//     return (

//         <div className={styles.sectionSiteMain}>
//             <div className={styles.containerProfile}>
//                 <div className={styles.userHeading}>
//                     <h1 className={styles.heading}>User profile</h1>
//                 </div>
//                 <div className={styles.sectionArticleProfile}>
//                     <div className={styles.profileMedia}>
//                         <img src="./assets/user_img.jpg" alt="user" />
//                     </div>
//                     <section className={styles.userInfo}>
//                         <p className={styles.email}>Email: {auth?.email || 'N/A'}</p>
//                         <p className={styles.username}>Username: {auth?.username || 'N/A'}</p>
//                         <p className={styles.createdTopics}>Created topics: {createdTopics.length || 0}</p>
//                         <p className={styles.answers}>Answers: {createdAnswers.length || 0}</p>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;