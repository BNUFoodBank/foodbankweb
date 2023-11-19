import React from 'react';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import styles from './page.module.css';

const Settings: React.FC = () => {
    return (
        <>
            <Navbar />
            <Underline />

            <div className={styles.Wrapper}>
                <div className={styles.Header}>Settings</div>
                <div className={styles.TextBoxHeading}>Hello</div>
                <input
                    required
                    type="text"
                    className={styles.TxtBox}
                    placeholder="Password"
                    name="hello"
                />
                <input
                    required
                    type="text"
                    className={styles.TxtBox}
                    placeholder="Password"
                    name="hello"
                />
                <button className={styles.Button}>
                    Button
                </button>
            </div>
        </>
    );
};

export default Settings;
