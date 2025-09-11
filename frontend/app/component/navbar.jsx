import React from 'react';
// import { poppins } from '../../styles/fonts';
// import { Press_Start_2P } from '../../styles/fonts';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.div}>
                <div className={styles.textWrapper}>LIFE GAME</div>
                <div href="/" className={styles.textWrapper2}>Home</div>
                <div href="/about" className={styles.textWrapper3}>About</div>
                <div href="/features" className={styles.textWrapper4}>features</div>
                <button className={styles.loginButton}>
                    <span className='textWrapper5'>Login</span>
                </button>
            </div>
        </div>
    );
}
