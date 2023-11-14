import { Link } from 'react-router-dom';

const TopicItem = ({
    heading,
    question,
    author,
    createdAt,
    likes,
}) => {
    return(
            <div className="section-article" >
              <section className="article">
                <div className="article-content">
                  <h2 className="article-heading">{heading}</h2>
                  <p className="text-area">{question}</p>
                </div>
              </section>
              <section className="article-info">
                <div className="author">
                  <p className="author-name">Creator: {author}</p>
                </div>
                <p className="article-created">{createdAt}</p>
                <div className="article-comments">
                  <p className="comments">Likes: {likes}</p>
                  <p className="read-more">
                    {/* here CORRECTION AFTER I GOT ID'S */}
                    <Link to="/detailsPage">
                      Read more <i className="fa-solid fa-square-arrow-up-right" />
                    </Link>
                  </p>
                </div>
              </section>
            </div>
    );
};

export default TopicItem;