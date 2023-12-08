import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as topicService from '../../services/topicService';
// import * as answerService from '../../services/answerService';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './Profile.module.css';

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [createdTopics, setCreatedTopics] = useState([]);
    // const [createdAnswers, setCreatedAnswers] = useState([]);

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

    // useEffect(() => {
    //     if (auth) {
    //         answerService.getAnswersForUser(auth._id)
    //             .then((result) => {
    //                 setCreatedAnswers(result);
    //                 console.log(result);
    //             })
    //             .catch((error) => console.log(error))
    //     }
    // }, [auth]);

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

                    <div className={styles.twoSections}>
                        <section className={styles.userInfo}>
                            <p className={styles.email}>Email: {auth?.email || 'N/A'}</p>
                            <p className={styles.username}><span>User name:</span> {auth?.username || 'N/A'}</p>
                            
                        </section>
                        <section className={styles.userActivity}>
                            <div className={styles.createdTopics}>
                                <div className={styles.topicsCount}>
                                    Created topics: {createdTopics.length || 0}{' '}
                                </div>
                                <div className={styles.list}>
                                    {createdTopics.map((topic) => (
                                        <div key={topic._id} className={styles.topicItem}>
                                            <Link key={topic._id} to={`/details/${topic._id}`}>
                                                {topic.heading}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <div className={styles.answers}>
                                Answers: {createdAnswers.length || 0}{' '}
                                <div className={styles.list}>
                                    {createdAnswers.map((answer) => (
                                        <div key={answer._id} className={styles.answerItem}>
                                            <Link key={answer._id} to={`/details/${answer.topicId}`}>
                                                {answer.answer}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;



