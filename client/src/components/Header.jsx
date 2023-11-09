const Header = () => {
    return(
        <div class="section-site-header-wrapper">
            <div class="section-site-header">
                <div class="site-logo">
                    <p class="media">
                        <a href="#"><img src="/assets/LipsLogo.png" alt=""/></a>
                    </p>
                </div>

                <div class="section-main-nav">
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="./allTopics.html">All Topics</a></li>
                            <li><a href="./createTopic.html">Create Topic</a></li>
                            <li><a href="./profile.html">Profile</a></li>
                            <li><a href="./login.html">Login</a></li>
                            <li><a href="./register.html">Register</a></li>
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