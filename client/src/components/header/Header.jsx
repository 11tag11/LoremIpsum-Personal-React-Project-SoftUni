import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import  { AuthContext }  from '../../contexts/AuthContext';

import styles from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    async function logoutHandler(e) {
        e.preventDefault();

        try {
            await userService.logout();
            setAuth(null);
            navigate('latestTopics')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="section-site-header-wrapper">
            <div className={styles.sectionSiteHeader}>
                <div className={styles.siteLogo}>
                    <p className={styles.media}>
                        <Link to="./latestTopics"><img src="/assets/LipsLogo.png" alt="" /></Link>
                    </p>
                </div>

                <div className={styles.sectionMainNav}>
                    <nav className={styles.mainNav}>
                        <ul>

                            <li><Link to="./latestTopics">Home</Link></li>
                            <li><Link to="./allTopics">All Topics</Link></li>
                            {auth ?
                                <>
                                    <li><Link to="./createTopic">Create Topic</Link></li>
                                    <li><Link to="./profile">Profile</Link></li>
                                    <li onClick={logoutHandler}><Link>Logout</Link></li>
                                </> :

                                <>
                                    <li><Link to="./register">Register</Link></li>
                                    <li><Link to="./login">Login</Link></li>
                                </>
                            }

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
                            <input type="text" placeholder="Search" />
                        </p>
                    </form>
                    <button className={styles.searchButton}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;