import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as topicService from '../../services/topicService';

const CreateTopic = () => {

    const [heading, setHeading] = useState('');
    const [question, setQuestion] = useState('');
    const navigate = useNavigate();

    const resetNewPostForm = () => {
        setHeading('');
        setQuestion('');
    };

    const headingChangeHandler = (e) => {
        setHeading(e.target.value);
    };

    const questionChangeHandler = (e) => {
        setQuestion(e.target.value);
    };


    const submitHandler = (e) => {
        const userId = localStorage.getItem('userId'); 
        const topicData = {
            heading,
            question,
            author: userId,
            userId
        };
        topicService.createTopic(topicData)
            .then((response) => {
                console.log('Post created', response);
                resetNewPostForm();
            })
            .catch((error) => {
                console.log('Post did not created!', error);
            })
            navigate('/latestTopics');
    };

    return (
        <div class="section-site-main">
            <div className="container create">
                <div className="new-post-heading">
                    <h1 className="new-heading">New Topic</h1>
                </div>
                <div className="section-articles">
                    <div className="section-article">
                        <section className="new-topic-form">

                            <form className="create-form" action="#" method="">
                                <input
                                    type="text"
                                    id="heading"
                                    value={heading}
                                    onChange={headingChangeHandler}
                                    name="heading"
                                    placeholder="Topic Title" />
                                <textarea
                                    type="question"
                                    name="question"
                                    id="question"
                                    value={question}
                                    onChange={questionChangeHandler}
                                    cols={30}
                                    rows={10}
                                    placeholder="Topic"
                                />
                                <div className="post-button-container">
                                    <button 
                                    type="button"
                                    className="new-post-button"
                                    onClick={submitHandler}>Post</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    );
}



export default CreateTopic;