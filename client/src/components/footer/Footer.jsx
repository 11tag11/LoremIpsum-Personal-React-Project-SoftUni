import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <div className={styles.siteFooter}>
                <p className={styles.allRights}>
                    &copy; 2023 Georgi Ivanov<span className={styles.bold}>Lorem</span><span className={styles.greenText}>Ipsum </span><span>Forum</span> 
                </p>
            </div>
            <div className={styles.socials}>
                <p className={styles.socialLink}>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </p>
            </div>
        </div>
    );
}
export default Footer;