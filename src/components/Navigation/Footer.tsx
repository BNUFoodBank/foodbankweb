import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/page1', label: 'Page 1' },
        { href: '/page2', label: 'Page 2' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <div className={styles.link}>Hello</div>
                </Link>
            </div>

            <div className={styles.links}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} passHref>
                        <div className={styles.link}>{link.label}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Footer;
