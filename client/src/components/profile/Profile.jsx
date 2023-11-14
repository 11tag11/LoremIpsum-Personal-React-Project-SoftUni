import React from 'react';


const Profile = () => {
    return (

        <div className="section-site-main">
            <div className="container profile">
                <div className="user-heading">
                    <h1 className="heading">User profile</h1>
                </div>
                <div className="section-article-profile">
                    <div className="profile-media">
                        <img src="./assets/user_img.jpg" alt="user" />
                    </div>
                    <section className="user-info">
                        <p className="email">Email: blep@abv.bg.com</p>
                        <p className="username">username: Gargamell</p>
                        <p className="created-topics">Created topics: 11</p>
                        <p className="comments">Comments: 11</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;