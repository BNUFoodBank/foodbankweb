// Navbar.jsx
import Link from 'next/link';
import { useAuth } from '../../app/Auth/auth';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const { isLoggedIn, userRole, token } = useAuth();

    const navLinks = [];
console.log(token)
    if (token != "") {
        navLinks.push({ href: '/FoodBank', label: 'FoodBanks' });
        navLinks.push({ href: '/Settings', label: 'Settings' });
        navLinks.push({ href: '/Auth/Logout', label: 'Logout' });

        if (userRole == 'GP' || userRole == 'Admin') {
            navLinks.push({ href: '/Referrals', label: 'Referrals' });

        }} else {
            navLinks.push({ href: '/FoodBank', label: 'FoodBanks' });
            navLinks.push({ href: '/Auth/Login', label: 'Login' });
        }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">Home</Link>
            </div>

            <div className={styles.links}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;