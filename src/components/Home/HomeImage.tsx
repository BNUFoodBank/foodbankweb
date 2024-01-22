import React from 'react';
import styles from './HomeImage.module.css';
import Link from "next/link";

const HomeImage: React.FC = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.HomeImage}
                src="https://cdn.discordapp.com/attachments/1025054805074382879/1159975833092509726/4kHomeimage.png?ex=65611f2d&is=654eaa2d&hm=0df8bab773006ce4cf03c4b91f06178834c4574aaa580a381f8c06d0b07ab3ec&"
                alt="Main Image"
            />
            <div className={styles['text-and-buttons']}>
                <h1>Bucks Food Banks</h1>
                <p>Welcome to the bucks food bank initiative!</p>
                <div className={styles.buttons}>
                    <div>
                        <Link href="/map">
                            <div className={`${styles.button} ${styles.button1}`}>Map</div>
                        </Link>
                        <Link href="/contact-us">
                            <div className={`${styles.button} ${styles.button2}`}>Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeImage;
