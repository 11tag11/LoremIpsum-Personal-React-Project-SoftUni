import React from 'react';
import DetailsPageAnswers from './DetailsPageAnswers';
import YourAnswer from './YourAnswer';
import TopicItem from '../allTopics/topicItem/topicItem';


const DetailsPage = () => {

    return (
        <div className="container details">
            <TopicItem />
        {/* <div className="container details">
            <div className="section-article">
                <section className="article">
                    <div className="article-content">
                        <div className="heading-likes">
                        <h2 className="article-heading">JavaScript</h2>
                        <div className="circle">
                        <p className="likes-count">11</p>
                        </div>
                        </div>
                        
                        <p className="text-area author-question">
                            Hooks solve a wide variety of seemingly unconnected problems in React
                            that we’ve encountered over five years of writing and maintaining tens
                            of thousands of components.
                        </p>
                    </div>
                </section>
                <section className="article-info question">
                    <div className="left-info">
                        <div className="author">
                            <p className="author-name">Author: Gargament</p>
                        </div>
                        <p className="article-created">27th October 2023, 11:11 AM</p>
                    </div>
                    <div className="likes-delete right">
                        <a href="./editPost.html" className="edit">
                            <i className="fa-solid fa-pen-to-square" />
                        </a>
                        <a href="#" className="likes">
                            <i className="fa-solid fa-thumbs-up" />
                        </a>
                        <a href="#" className="delete">
                            <i className="fa-solid fa-trash" />
                        </a>
                    </div>
                </section>
            </div> */}

            <DetailsPageAnswers/>
            <YourAnswer />
        </div>



    );

};

export default DetailsPage;