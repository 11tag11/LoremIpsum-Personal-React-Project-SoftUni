import React from 'react';
import styles from './DetailsPageAnswers.module.css';
const DetailsPageAnswers = ({ answers, topicId }) => {
    // console.log('Answers in DetailsPageAnswers:', answers);
    // console.log(topicId);

    // Filter answers based on the topicId
    const filteredAnswers = Object.values(answers)
        .filter(answer => answer.topicId === topicId);
    return (
        <div className={`${styles.details} ${styles.answersSection}`}> 
            {filteredAnswers && Array.isArray(filteredAnswers) && filteredAnswers.length > 0 ? (
                <>
                    {filteredAnswers.map((answer) => (
                        <div className={`${styles.sectionArticle} ${styles.answer}`} key={answer._id}>
                            <section className={styles.article}>
                                <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                                    <h2 className={`${styles.articleHeading} ${styles.userName}`}>Author Name Here Later</h2>
                                    {/* <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.author}</h2> */}
                                    <p className={styles.textArea}>{answer.answer}</p>
                                </div>
                            </section>
                            <section className={`${styles.articleInfo} ${styles.question}`}>
                                <div className={styles.leftInfo}>
                                    <p className={styles.articleCreated}>{answer.createdAt}</p>
                                </div>
                                <div className={`${styles.likesDelete} ${styles.right}`}>
                                    <a href="./editPost.html" className={styles.edit}>
                                        <i className="fa-solid fa-pen-to-square" />
                                    </a>
                                    <a href="#" className={styles.likes}>
                                        <i className="fa-solid fa-thumbs-up" />
                                    </a>
                                    <a href="#" className={styles.delete}>
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
    );
}

export default DetailsPageAnswers;

