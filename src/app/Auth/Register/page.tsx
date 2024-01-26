"use client"
import React, {useState} from 'react';
import styles from './page.module.css';
import {redirect} from "next/navigation";

interface RegistrationFormProps {
    onClose: () => void;
}

const Page: React.FC<RegistrationFormProps> = ({onClose}) => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage != null) {
        redirect('/')
    }

    const initialFormData = {
        Username: '',
        Password: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [registrationStatus, setRegistrationStatus] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (formData.Username.length < 5) {
            setRegistrationStatus('Username must be at least 5 characters long.');
            return;
        }

        if (formData.Password.length < 7) {
            setRegistrationStatus('Password must be at least 7 characters long.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5202/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
                body: JSON.stringify(formData),
            });

            console.log(response);

            const text = await response.text();

            if (response.ok && text === 'Successfully Registered') {
                console.log('Register GOOD');
                setRegistrationStatus('Registration successful!');
                setFormData(initialFormData);
            } else {
                setRegistrationStatus(`Registration failed: ${text}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setRegistrationStatus('Error during registration. Please try again.');
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
                <h2 className={styles.RegistrationFormHeading}>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['EntryBoxTxt']}>Username</div>
                    <div>

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

                    {registrationStatus && (
                        <div className={styles['registration-status']}>
                            {registrationStatus}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Page;
