"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Page from '../Register/page';

export default function Login() {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleCloseRegistrationModal = () => {
        setShowRegistrationModal(false);
    };

    const handleShowRegistrationModal = () => {
        setShowRegistrationModal(true);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5202/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful login, e.g., redirect to dashboard
            } else {
                // Handle login error, e.g., display an error message
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error during login:', error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
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
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="password"
                            className={styles.TxtBox2}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button className={styles.LoginButton} onClick={handleLogin}>
                            Log in
                        </button>
                        <a href="#" className={styles.ForgotPassword}>
                            Forgot Password?
                        </a>

                        <div className={styles.Underline}></div>
                        <button className={styles.Register} onClick={handleShowRegistrationModal}>
                            Create new account
                        </button>
                    </div>
                </div>

                {showRegistrationModal && (
                    <div className={styles.Modal}>
                        <div className={styles.ModalContent}>
                            <Page onClose={handleCloseRegistrationModal} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
