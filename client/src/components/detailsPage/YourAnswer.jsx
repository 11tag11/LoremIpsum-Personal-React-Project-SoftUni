import React from 'react';


const YourAnswer = () => {
    return (
        <div className="container details">
            <div className="answers-section">
                <div className="section-article answer">
                    <section className="article">
                        <div className="article-content user-answer">
                            <h2 className="article-heading user-name your-answer">Your answer</h2>
                            <div className="answer-area">
                                <textarea
                                    name="postText"
                                    id=""
                                    cols={30}
                                    rows={10}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="post-button-container">
                                <button className="new-post-button">Post</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="go-to-top">
                <a href="./detailsPage.html">
                    <i className="fa-solid fa-circle-arrow-up" />
                </a>
            </div>
        </div>

    );
};

export default YourAnswer;