import { Link } from 'react-router-dom';
import styles from './TopicItem.module.css';


const TopicItem = ({
    _id,
    heading,
    question,
    author,
    createdAt,
    likes,
}) => {
    // console.log('_id:', _id);
    // console.log('heading:', heading);
    return(
            <div className={styles.sectionArticle} >
              <section className={styles.article}>
                <div className={styles.articleContent}>
                  <h2 className={styles.articleHeading}>{heading}</h2>
                  <p className={styles.textArea}>{question}</p>
                </div>
              </section>
              <section className={styles.articleInfo}>
                <div className={styles.author}>
                  <p className={styles.authorName}>Creator: {author}</p>
                </div>
                <p className={styles.articleCreated}>{createdAt}</p>
                <div className={styles.articleComments}>
                  <p className={styles.comments}>Likes: {likes}</p>
                  <p className={styles.readMore}>
                    <Link to={`/latestTopics/${_id}`}>
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </Link>
                  </p>
                </div>
              </section>
            </div>
    );

    // return (
    //         <div className="section-article">
    //             <section className="article">
    //                 <div className="article-content">
    //                     <div className="heading-likes">
    //                     <h2 className="article-heading">{heading}</h2>
    //                     <div className="circle">
    //                     <p className="likes-count">{likes}</p>
    //                     </div>
    //                     </div>
                        
    //                     <p className="text-area author-question">
    //                         {question}
    //                     </p>
    //                 </div>
    //             </section>
    //             <section className="article-info question">
    //                 <div className="left-info">
    //                     <div className="author">
    //                         <p className="author-name">Author: {author}</p>
    //                     </div>
    //                     <p className="article-created">{createdAt}</p>
    //                 </div>
    //                 <div className="likes-delete right">
    //                     <a href="./editPost.html" className="edit">
    //                         <i className="fa-solid fa-pen-to-square" />
    //                     </a>
    //                     <a href="#" className="likes">
    //                         <i className="fa-solid fa-thumbs-up" />
    //                     </a>
    //                     <a href="#" className="delete">
    //                         <i className="fa-solid fa-trash" />
    //                     </a>
    //                 </div>
    //             </section>
    //         </div>
    // );
};

export default TopicItem;