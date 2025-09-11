"use client";

import React, {useState} from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Features', href: '/features' },
    ]
    
    const [activeNav, setActiveNav] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
        setMenuOpen(false);
    };

    const handleLoginClick = () => {
        console.log('Log In');
    };

    return (
        <header className={styles.navBar} role="banner">
            <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
                <h1 className={styles.logo}>LIFE GAME</h1>
                <button
                    className={styles.menuButton}
                    aria-label='toggle menu'
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                {/* Navigation Links */}
                <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavClick(item.name)}
                            className={`${styles.navLink} ${
                                activeNav === item.name ? styles.activeLink : ""
                            }`}
                            aria-current={activeNav === item.name ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                ))}

                    <button
                        className={styles.loginButton}
                        onClick={handleLoginClick}
                        type='button'
                        aria-label='Log in to your account'
                    >
                        <span className={styles.loginText}>Login</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;



