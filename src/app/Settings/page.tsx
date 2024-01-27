"use client"
import React from 'react';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import styles from './page.module.css';
import {redirect} from 'next/navigation'

const Settings: React.FC = () => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage == null) {
        redirect('/')
    }
    return (
        <>
            <Navbar/>
            <Underline/>

            <div className={styles.Wrapper}>
                <div className={styles.Header}>Settings</div>
                <div className={styles.TextBoxHeading}>Update Password</div>
                <input
                    required
                    type="password"
                    className={styles.TxtBox}
                    placeholder="Old Password"
                    name="hello"
                />
                <input
                    required
                    type="password"
                    className={styles.TxtBox}
                    placeholder="New Password"
                    name="hello"
                />
                <button className={styles.Button}>
                    Submit
                </button>
                <div className={styles.TextBoxHeading}>Update Username</div>
                <input
                    required
                    type="text"
                    className={styles.TxtBox}
                    placeholder="Old Username"
                    name="hello"
                />
                <input
                    required
                    type="text"
                    className={styles.TxtBox}
                    placeholder="New Username"
                    name="hello"
                />
                <button className={styles.Button}>
                    Submit
                </button>

            </div>

        </>
    );
};

export default Settings;
