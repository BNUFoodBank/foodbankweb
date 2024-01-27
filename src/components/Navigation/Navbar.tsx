"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [token, setToken] = useState<string | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [navLinks, setNavLinks] = useState<{ href: string; label: string; onClick?: () => void }[]>([]);

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("token");
        const userRoleFromStorage = localStorage.getItem("role");

        setToken(tokenFromStorage);
        setUserRole(userRoleFromStorage);

        const updateNavLinks = () => {
            const links: { href: string; label: string; onClick?: () => void }[] = [];

            if (tokenFromStorage != null) {
                links.push({href: '/Settings', label: 'Settings'});
                links.push({href: '/FoodBank', label: 'FoodBanks'});
                links.push({href: '#', label: 'Logout', onClick: handleLogout});

                if (userRoleFromStorage === 'GP' || userRoleFromStorage === 'Admin') {
                    links.push({href: '/Referrals', label: 'Referrals'});
                    links.push({href: '#', label: 'Logout', onClick: handleLogout});
                }
            } else {
                links.push({href: '/FoodBank', label: 'FoodBanks'});
                links.push({href: '/Auth/Login', label: 'Login'});
            }

            setNavLinks(links);
        };

        updateNavLinks();

    }, [token]);

    const handleLogout = () => {
        // Clear localStorage token and role
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setToken(null);
        setUserRole(null);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">Home</Link>
            </div>

            <div className={styles.links}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <div onClick={link.onClick}>{link.label}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
