'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import styles from './page.module.css';

const Settings: React.FC = () => {
    const router = useRouter();
    const isClient = typeof window !== 'undefined';
    const tokenFromStorage = isClient ? localStorage.getItem("token") : null;
    const [responseError, setResponseError] = useState<string>('');

    const [formData, setFormData] = useState({
        OldPassword: '',
        NewPassword: '',
    });

    useEffect(() => {
        if (isClient && tokenFromStorage == null) {
            router.push('/');
        }
    }, [isClient, tokenFromStorage, router]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handlePasswordChange = async () => {
        const obj = {
            "OldPassword": formData.OldPassword,
            "NewPassword": formData.NewPassword,
            "Username": isClient ? localStorage.getItem("username") : null,
        };

        try {
            const response = await fetch('http://localhost:5202/user/updatepassword', {
                method: 'POST',
                cache: 'no-store',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
            });

            var text = await response.text()

            console.log(text)
            if (text == "Password Update") {
                setResponseError('Password Changed!');
            } else {
                setResponseError('Error during password update. Please try again.');
            }
        } catch (error) {
            setResponseError('Error during password update. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <Underline />

            <div className={styles.Wrapper}>
                <div className={styles.Header}>Settings</div>
                <div className={styles.TextBoxHeading}>Update Password</div>
                <input
                    required
                    type="password"
                    className={styles.TxtBox}
                    placeholder="Old Password"
                    name="OldPassword"
                    onChange={handleChange}
                />
                <input
                    required
                    type="password"
                    className={styles.TxtBox}
                    placeholder="New Password"
                    name="NewPassword"
                    onChange={handleChange}
                />
                <button className={styles.Button} onClick={handlePasswordChange}>
                    Submit
                </button>

                {responseError && (
                    <div className={styles.Error}>
                        {responseError}
                    </div>
                )}
            </div>
        </>
    );
};

export default Settings;
