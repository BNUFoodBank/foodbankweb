import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    const navLinks = [
        {href: '/', label: 'Home'},
        {href: '/page1', label: 'Page 1'},
        {href: '/page2', label: 'Page 2'},
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">
                    Hello
                </Link>
            </div>

            <div className={styles.links}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                        Hello
                    </Link>


                ))}
            </div>
        </nav>
    );
};

export default Footer;
