import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';


const PageNotFound = () => {
    return (
        <div className={styles.sectionSiteMain}>
            <div className={styles.containerProfile}>
                <div className={styles.sectionArticleNotFound}>
                    <div className={styles.notFound}>
                        <p className={styles.textNotFound}>Page Not Found</p>
                        <p className={styles.fourZeroFour}>404</p>
                    </div>
                </div>
                {/* <div className="go-home-page">
                    <Link className="home-link" to="/latestTopics">
                        Jump to Home page
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default PageNotFound;