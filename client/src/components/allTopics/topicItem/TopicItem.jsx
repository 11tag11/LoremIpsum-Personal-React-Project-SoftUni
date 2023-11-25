import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/dateUtils';
import styles from './TopicItem.module.css';


const TopicItem = ({
  _id,
  heading,
  question,
  author,
  _createdOn,
  likes,
}) => {
  const formattedDate = formatDate(_createdOn);
  // console.log('_id:', _id);
  // console.log('heading:', heading);
  return (
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
        <p className={styles.articleCreated}>{formattedDate}</p>
        <div className={styles.articleComments}>
          <p className={styles.comments}>Likes: {likes}</p>
          <p className={styles.readMore}>
            <Link to={`/details/${_id}`}>
              Read more <i className="fa-solid fa-square-arrow-up-right" />
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TopicItem;