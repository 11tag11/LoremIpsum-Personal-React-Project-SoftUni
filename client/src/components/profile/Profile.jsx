import React from 'react';
import { useState, useEffect, useContext } from 'react';
import * as topicService from '../../services/topicService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Profile.module.css';
const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [createdTopics, setCreatedTopics] = useState([]);

    useEffect(() => {
        if (auth) {
            topicService.getMyTopics(auth._id)
                .then((result) => {
                    setCreatedTopics(result);
                    // console.log(result); 
                })
                .catch((error) => console.log(error));
        }
    }, [auth]);
    // //undefined 22.11.
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
                        <p className={styles.createdTopics}>Created topics: {(auth?.createdTopics || []).length || 0}</p>
                        <p className={styles.answers}>Comments: {auth?.answers || 0}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;