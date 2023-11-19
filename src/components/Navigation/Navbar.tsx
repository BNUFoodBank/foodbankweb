import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const navLinks = [
        {href: '/', label: 'Page'},
        {href: '/FoodBank', label: 'FoodBank'},
        {href: '/Referrals', label: 'Referrals'},
        {href: '/Auth/Login', label: 'Login'},
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    FoodBanks
                </Link>
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
