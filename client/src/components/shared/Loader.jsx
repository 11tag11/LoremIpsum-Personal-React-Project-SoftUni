import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loaderBack}>
            <div className={styles.loader}>
                <img src='./assets/Reload-1s-101px.gif' alt="#" />
            </div>
        </div>
    );

}