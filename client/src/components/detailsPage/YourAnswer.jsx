import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const YourAnswer = () => {
    const [topic, setTopic] = useState({});
    const { topicId } = useParams();

    useEffect(() => {

        topicService.getOne(topicId)
            .then(data => {
                setTopic(data.topic); // Access the topic property
            })
            .catch(error => {
                console.error('Error fetching topic:', error);
            });
    }, [topicId]);

    const addAnswerHandler = () => {
        // 3:05 lesson....15.11.
    }

    return (
        <div className="container details">
            <div className="answers-section">
                <div className="section-article answer">
                    <section className="article">
                        <form action="" onSubmit={addAnswerHandler}>
                            
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
                        </form>
                    </section>
                </div>
            </div>
            <div className="go-to-top">
                <a href="./detailsPage">
                    <i className="fa-solid fa-circle-arrow-up" />
                </a>
            </div>
        </div>

    );
};

export default YourAnswer;