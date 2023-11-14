import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="section-site-header-wrapper">
            <div className="section-site-header">
                <div className="site-logo">
                    <p className="media">
                        <Link to="./latestTopics"><img src="/assets/LipsLogo.png" alt=""/></Link>
                    </p>
                </div>

                <div className="section-main-nav">
                    <nav className="main-nav">
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

            <div className="site-message">
                <p className="slogan">Developer's daily<span className="green-text"><strong> topics </strong></span>forum</p>
                <div className="site-search">
                    <form action="#" className="search">
                        <p className="input-field">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search"/>
                        </p>
                    </form>
                    <button className="search-button">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;