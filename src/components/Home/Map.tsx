import styles from './Map.module.css';

const Map: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.Hometext1}>Our Mission</h2>
                <p>
                    We are dedicated to helping those in need by providing essential food
                    items and support to ensure that no one goes hungry.
                </p>
                <p className={styles.Hometext3}>
                    Our mission is to alleviate hunger and food insecurity by distributing
                    nutritious food, offering assistance programs, and supporting families
                    and individuals who are facing difficult times.
                </p>
                <button className={styles.ctaButton}>Learn More</button>
            </div>
            <div className={styles.box}></div>
        </div>
    );
};

export default Map;
