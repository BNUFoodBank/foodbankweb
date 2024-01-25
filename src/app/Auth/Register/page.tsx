"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

interface RegistrationFormProps {
    onClose: () => void;
}

const Page: React.FC<RegistrationFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        Username: '',
        Password: ''
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5202/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
                body: JSON.stringify(formData),
            });

            console.log(response)

            let text =  await response.text();

            if (response.ok && text == "Successfully Registered") {
                console.log("Register GOOD")
                // Handle successful registration, e.g., show a success message
            } else {
                // Handle registration error, e.g., display an error message
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error during registration:', error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className={styles['background']}>
            <div className={styles['registration-form']}>
                <button className={styles['close-button']} onClick={onClose}>
                    X
                </button>
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>Username</div>
                        <input
                            type="text"
                            id="Username"
                            name="Username"
                            value={formData.Username}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <div>Password</div>
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit" className={styles['submitbutton']}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
