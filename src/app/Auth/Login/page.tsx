"use client"
import React from 'react';
import styles from './page.module.css';
import Page from '../Register/page';

const Login: React.FC = () => {
    const [showRegistrationModal, setShowRegistrationModal] = React.useState(false);
    const [formData, setFormData] = React.useState({
        Username: '',
        Password: '',
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
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();

            if (response.ok && text !== "Incorrect Username or Password.") {
                const [token, role] = text.split("#");

                // Use localStorage for token and role
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);

                console.log("Login successful");

                // Redirect to the home page using window.location
                window.location.href = '/';
            } else {
                // Handle login error, e.g., display an error message
                console.error('Login failed:', text);
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
};

export default Login;
