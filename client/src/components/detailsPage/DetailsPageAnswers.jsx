import React, { useEffect, useState } from 'react';
import * as answerService from'../../services/answerService';
import { formatDate } from '../../utils/dateUtils';

import styles from './DetailsPageAnswers.module.css';

const DetailsPageAnswers = ({ topicId }) => {
    const [answers, setAnswers] = useState([]);
    console.log(topicId);

    useEffect(() => {
        answerService.getAnswersForTopic(topicId)
    .then(result => {
      setAnswers(result);
      console.log('Answers:', result);
    })
    .catch(error => console.error('Error fetching answers:', error));
    }, [topicId]);

    
    return (
        <div className={`${styles.details} ${styles.answersSection}`}>
            {answers && Array.isArray(answers) && answers.length > 0 ? (
                <>
                    {answers.map((answer) => (
                        <div className={`${styles.sectionArticle} ${styles.answer}`} key={answer._id}>
                            {console.log('Answer ID:', answer._id)}
                            <section className={styles.article}>
                                <div className={`${styles.articleContent} ${styles.userAnswer}`}>
                                    <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.username}</h2>
                                    {/* <h2 className={`${styles.articleHeading} ${styles.userName}`}>{answer.author}</h2> */}
                                    <p className={styles.textArea}>{answer.answer}</p>
                                </div>
                            </section>
                            <section className={`${styles.articleInfo} ${styles.question}`}>
                                <div className={styles.leftInfo}>
                                    <p className={styles.articleCreated}>{formatDate(answer._createdOn)}</p>
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
                    {console.log('Answers array:', answers)}
                </>
            ) : (
                <p>There is no answers for this question yet.</p>
            )}
        </div>
    );
}

export default DetailsPageAnswers;

