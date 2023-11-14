import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
    return (
        <div className="section-site-main">
            <div className="container profile">
                <div className="section-article-not-found">
                    <div className="not-found">
                        <p className="text-not-found">Page Not Found</p>
                        <p className="four-zero-four">404</p>
                    </div>
                </div>
                <div className="go-home-page">
                    <Link className="home-link" to="/latestTopics">
                        Jump to Home page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;