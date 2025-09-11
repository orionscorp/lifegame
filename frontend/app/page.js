// frontend/app/page.js
"use client";

import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/main.module.css'
import Navbar from '../component/navbar';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Life Log</title>
        <meta name="description" content="Life tracking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}

      <h1 className='text-center mb-8 text-4xl'>Life Log syi</h1>
      <nav className={styles.nav}>
        <Link href="/life-log" className={styles.navLink}>Life Log</Link>
        <Link href="/schedule" className={styles.navLink}>Schedule</Link>
        <Link href="/meditate" className={styles.navLink}>Meditate</Link>
        <Link href="/back" className={styles.navLink}>Back</Link>
        <Link href="/time" className={styles.navLink}>Time</Link>
      </nav>

      {/* <style jsx>{`
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.5rem;
        }
        .nav {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .nav-link {
          padding: 15px;
          background: #f0f0f0;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: background 0.2s;
        }
        .nav-link:hover {
          background: #e0e0e0;
        }
      `}</style> */}
    </div>
  );
}