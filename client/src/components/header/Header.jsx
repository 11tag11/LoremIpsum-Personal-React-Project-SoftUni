import { Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
    return(
        <div className="section-site-header-wrapper">
            <div className={styles.sectionSiteHeader}>
                <div className={styles.siteLogo}>
                    <p className={styles.media}>
                        <Link to="./latestTopics"><img src="/assets/LipsLogo.png" alt=""/></Link>
                    </p>
                </div>

                <div className={styles.sectionMainNav}>
                    <nav className={styles.mainNav}>
                        <ul>
                            <li><Link to="./latestTopics">Home</Link></li>
                            <li><Link to="./allTopics">All Topics</Link></li>

                            <li><Link to="./profile">Profile</Link></li>
                            <li><Link to="./createTopic">Create Topic</Link></li>
                            <li><Link to="./logout">Logout</Link></li>
                            
                            <li><Link to="./login">Login</Link></li>
                            <li><Link to="./register">Register</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>

            <div className={styles.siteMessage}>
                <p className={styles.slogan}>Developer's daily<span className={styles.greenText}><strong> topics </strong></span>forum</p>
                <div className={styles.siteSearch}>
                    <form action="#" className={styles.search}>
                        <p className={styles.inputField}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search"/>
                        </p>
                    </form>
                    <button className={styles.searchButton}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;