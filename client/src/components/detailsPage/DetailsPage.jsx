import React, { useEffect, useState } from 'react';
import DetailsPageAnswers from './DetailsPageAnswers';
import YourAnswer from './YourAnswer';
import TopicItem from '../allTopics/topicItem/topicItem';
import { useParams } from 'react-router-dom';
import * as topicService from '../../services/topicService';

const DetailsPage = () => {

    const  [ topic, setTopic ]  = useState({});
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

    // console.log('Component Rerendered');
    // console.log('Topic:', topic);


    return (
        // <TopicItem />
        <div className="container details">
            <div className="section-article">
                <section className="article">
                    <div className="article-content">
                        <div className="heading-likes">
                            <h2 className="article-heading">{topic.heading}</h2>
                            <div className="circle">
                                <p className="likes-count">{topic.likes}</p>
                            </div>
                        </div>

                        <p className="text-area author-question">
                            {topic.question}
                        </p>
                    </div>
                </section>
                <section className="article-info question">
                    <div className="left-info">
                        <div className="author">
                            <p className="author-name">Author: {topic.author}</p>
                        </div>
                        <p className="article-created">{topic.createdAt}</p>
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
            </div>

            <DetailsPageAnswers />
            <YourAnswer />
        </div>



    );

};

export default DetailsPage;