"use client"
import React, {useState} from 'react';
import styles from './page.module.css';
import RegistrationForm from '../Register/RegistrationForm';
import Link from "next/link";

export default function Login() {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false);
    };

    const handleShowRegistrationModal = () => {
        setShowRegistrationModal(true);
    };

    return (
        <div className={styles.AppWrapper}>
            <div className={styles.MainContainerStyle}>
                <div className={styles.LogoContainer}>
                    <div className={styles.Logo}>Your Logo Text</div>
                    <div className={styles.TextUnderLogo}>Text Under Logo</div>
                </div>

                <div className={styles.MainContainer}>
                    <div className={styles.TxtBoxStyle}>
                        <input
                            required
                            type="email"
                            className={styles.TxtBox1}
                            placeholder="Email"
                            name="email"
                        />
                        <input
                            required
                            type="password"
                            className={styles.TxtBox2}
                            placeholder="Password"
                            name="password"
                        />
                        <button className={styles.LoginButton}>

                            <Link href="/"><div>Log in</div></Link>

                        </button>
                        <a href="#" className={styles.ForgotPassword}>Forgot Password?</a>

                        <div className={styles.Underline}></div>
                        <button className={styles.Register} onClick={handleShowRegistrationModal}>
                            Create new account
                        </button>
                    </div>
                </div>
            </div>

            {showRegistrationModal && (
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <RegistrationForm onClose={handleCloseRegistrationModal}/>
                    </div>
                </div>
            )}
        </div>
    );
}