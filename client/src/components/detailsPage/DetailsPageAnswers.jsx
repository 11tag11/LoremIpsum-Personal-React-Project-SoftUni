import React from 'react';

const DetailsPageAnswers = ({ answers, topicId }) => {
    // console.log('Answers in DetailsPageAnswers:', answers);
    // console.log(topicId);

    // Filter answers based on the topicId
    const filteredAnswers = Object.values(answers)
        .filter(answer => answer.topicId === topicId);
    return (
        <div className="container details">
            <div className="answers-section">
                {filteredAnswers && Array.isArray(filteredAnswers) && filteredAnswers.length > 0 ? (
                    <>
                        {filteredAnswers.map((answer) => (
                            <div className="section-article answer" key={answer._id}>
                                <section className="article">
                                    <div className="article-content user-answer">
                                        <h2 className="article-heading user-name">Author Name Here Later</h2>
                                        {/* <h2 className="article-heading user-name">{answer.author}</h2> */}
                                        <p className="text-area">{answer.answer}</p>

                                    </div>
                                </section>
                                <section className="article-info question">
                                    <div className="left-info">
                                        <p className="article-created">{answer.createdAt}</p>
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
                        ))}
                        {console.log('Answers array:', filteredAnswers)}
                    </>
                ) : (
                    <p>There is no answers for this question yet.</p>
                )}
            </div>
        </div>
    );
}

export default DetailsPageAnswers;

