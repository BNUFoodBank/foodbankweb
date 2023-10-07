// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles['footer-menu']}>
                    <li className={styles['footer-menu-item']}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles['footer-menu-item']}>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className={styles['social-icons']}>
                <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles['social-icon']} />
                </a>
                <a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className={styles['social-icon']} />
                </a>
                <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles['social-icon']} />
                </a>
                <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles['social-icon']} />
                </a>
                <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className={styles['social-icon']} />
                </a>
            </div>
            <p>&copy; {currentYear} Free Food</p>
        </footer>
    );
};

export default Footer;
