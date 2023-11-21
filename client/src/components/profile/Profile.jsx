import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
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
                        <p className={styles.email}>Email: blep@abv.bg.com</p>
                        <p className={styles.username}>username: Gargamell</p>
                        <p className={styles.createdTopics}>Created topics: 11</p>
                        <p className={styles.comments}>Comments: 11</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;