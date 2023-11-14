import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div class="section-site-header-wrapper">
            <div class="section-site-header">
                <div class="site-logo">
                    <p class="media">
                        <Link to="./latestTopics"><img src="/assets/LipsLogo.png" alt=""/></Link>
                    </p>
                </div>

                <div class="section-main-nav">
                    <nav class="main-nav">
                        <ul>
                            <li><Link to="./latestTopics">Home</Link></li>
                            <li><Link to="./allTopics">All Topics</Link></li>
                            <li><Link to="./createTopic">Create Topic</Link></li>
                            <li><Link to="./profile">Profile</Link></li>
                            <li><Link to="./login">Login</Link></li>
                            <li><Link to="./register">Register</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>

            <div class="site-message">
                <p class="slogan">Developer's daily<span class="green-text"><strong> topics </strong></span>forum</p>
                <div class="site-search">
                    <form action="#" class="search">
                        <p class="input-field">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Can't find what you searching for?"/>
                        </p>
                    </form>
                    <button class="search-button">Search</button>
                </div>
            </div>
        </div>
    );
}

export default Header;