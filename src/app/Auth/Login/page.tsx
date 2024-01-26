"use client"
import React from 'react';
import styles from './page.module.css';
import Page from '../Register/page';
import {redirect} from "next/navigation";

const Login: React.FC = () => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage != null) {
        redirect('/')
    }
    const [showRegistrationModal, setShowRegistrationModal] = React.useState(false);
    const [formData, setFormData] = React.useState({
        Username: '',
        Password: '',
    });
    const [loginError, setLoginError] = React.useState<string | null>(null);

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
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();

            if (response.ok && text !== "Incorrect Username or Password.") {
                const [token, role] = text.split("#");

                localStorage.setItem("token", token);
                localStorage.setItem("role", role);

                console.log("Login successful");

                window.location.href = '/';
            } else {
                setLoginError(text);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setLoginError('Error during login. Please try again.');
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
                    <div className={styles.Logo}>Foodbank LogIn</div>
                    <div className={styles.TextUnderLogo}>C0664</div>
                </div>

                <div className={styles.MainContainer}>
                    <div className={styles.TxtBoxStyle}>
                        <input
                            required
                            type="text"
                            className={styles.TxtBox1}
                            placeholder="Username"
                            name="Username"
                            value={formData.Username}
                            onChange={handleChange}
                        />
                        <input
                            required
                            type="password"
                            className={styles.TxtBox2}
                            placeholder="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                        />
                        <button className={styles.LoginButton} onClick={handleLogin}>
                            Log in
                        </button>

                        <div className={styles.Underline}></div>
                        <button className={styles.Register} onClick={handleShowRegistrationModal}>
                            Create new account
                        </button>
                    </div>

                    {loginError && (
                        <div className={styles.ErrorMessage}>
                            {loginError}
                        </div>
                    )}
                </div>

                {showRegistrationModal && (
                    <div className={styles.Modal}>
                        <div className={styles.ModalContent}>
                            <Page onClose={handleCloseRegistrationModal}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
