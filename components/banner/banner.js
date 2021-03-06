import styles from './banner.module.css';

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Discover</span>
                <span className={styles.title2}>Coffee</span>
            </h1>
            <p className={styles.subTitle}>Get a damn fine cup of coffee in the city of Rochester, NY.</p>
            <button className={styles.button} onClick={props.handleOnClick}>
                {props.buttonText}
            </button>
        </div>
    );
}

export default Banner;