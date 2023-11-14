const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="site-footer">
                <p className="all-rights">
                    &copy; 2023 Georgi Ivanov:<span className="bold"> Lorem</span><span className="green-text">Ipsum </span><span>Forum</span> 
                </p>
            </div>
            <div className="socials">
                <p className="social-links">
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </p>
            </div>
        </div>
    );
}
export default Footer;