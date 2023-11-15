import { Link } from 'react-router-dom';

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