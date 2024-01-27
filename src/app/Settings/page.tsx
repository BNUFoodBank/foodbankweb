"use client"
import React from 'react';
import Navbar from "@/components/Navigation/Navbar";
import Underline from "@/components/Home/Underline";
import styles from './page.module.css';
import {redirect} from 'next/navigation'

const Settings: React.FC = () => {
    const tokenFromStorage = localStorage.getItem("token");

    const [formData, setFormData] = React.useState({
        OldPassword: '',
        NewPassword: '',
    });

    if (tokenFromStorage == null) {
        redirect('/')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handlePasswordChange = (async () => {
        const obj = {
            "OldPassword": formData.OldPassword,
            "NewPassword": formData.NewPassword,
            "Username": localStorage.getItem("username")
        };
        const response = await fetch('http://localhost:5202/user/updatepassword', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        var x = await response.text()
        console.log(x)
    })

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
            </div>

        </>
    );
};

export default Settings;
