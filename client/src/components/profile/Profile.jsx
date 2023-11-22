import React from 'react';
import styles from './Profile.module.css';

const Profile = ( {user} ) => {
    console.log(user);//undefined 22.11.
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
                        <p className={styles.email}>Email: {user?.email || 'N/A'}</p>
                        <p className={styles.username}>Username: {user?.username || 'N/A'}</p>
                        <p className={styles.createdTopics}>Created topics: {user?.createdTopics || 0}</p>
                        <p className={styles.answers}>Comments: {user?.answers || 0}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;