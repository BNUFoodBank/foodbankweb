import React from 'react';
import styles from './HomeImage.module.css';

const HomeImage: React.FC = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.HomeImage}
                src="https://cdn.discordapp.com/attachments/1123787722776121385/1162927437303259237/image.png?ex=653db793&is=652b4293&hm=24e4fd6733ce38f6e59d00d7ff5537393396af7052625b0bddf6b0e1c23a4c93&"
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
