// components/HomeContents.tsx
import React from 'react';
import styles from './HomeContent.module.css';

const HomeContents: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src="https://cdn.discordapp.com/attachments/1025054805074382879/1159975833092509726/4kHomeimage.png?ex=6532faad&is=652085ad&hm=840a369bcb6da45255436f9d634e10ffed1a01c9ae8ec5306ec0e780b8d53769&" // Replace with the path to your 4K image
                    alt="4K Image"
                    className={styles.image}
                />
                <div className={styles.textContainer}>
                    <h1 className={styles.mainHeading}>Free Food</h1>
                    <p className={styles.subtext}>
                        We are dedicated to providing essential food items and support to ensure that no one goes hungry.
                    </p>
                    <button className={styles.button}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HomeContents;
