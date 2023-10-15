import styles from './Database.module.css';

const Database: React.FC = () => {
    return (
        <div className={styles.container}>


            <img
                src="https://cdn.discordapp.com/attachments/1123787722776121385/1162941777242750976/database-icon-illustration.png?ex=653dc4ee&is=652b4fee&hm=06ce67d3f0d9acbc9b122f190dd5d843f95aad4b491e06a5e71a17054c826931&" // Replace with your image source
                alt="Your Alt Text" // Replace with your alt text
                className={styles.box}
            />


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
        </div>
    );
};

export default Database;
