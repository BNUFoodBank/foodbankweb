import React from 'react';
import styles from './HomeImage.module.css';

const HomeImage: React.FC = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.HomeImage}
                src="https://cdn.discordapp.com/attachments/1025054805074382879/1159975833092509726/4kHomeimage.png?ex=65611f2d&is=654eaa2d&hm=0df8bab773006ce4cf03c4b91f06178834c4574aaa580a381f8c06d0b07ab3ec&"
                alt="Main Image"
            />
            <div className={styles['text-and-buttons']}>
                <h1>Main Heading</h1>
                <p>This is some text below the main heading.</p>
                <div className={styles.buttons}>
                    <button className={`${styles.button} ${styles.button1}`}>Button 1</button>
                    <button className={`${styles.button} ${styles.button2}`}>Button 2</button>
                </div>
            </div>
        </div>
    );
};

export default HomeImage;
