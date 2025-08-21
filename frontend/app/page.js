// frontend/app/page.js
"use client";

import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Life Log</title>
        <meta name="description" content="Life tracking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Life Log syi</h1>
      <nav className="nav">
        <Link href="/life-log" className="nav-link">Life Log</Link>
        <Link href="/schedule" className="nav-link">Schedule</Link>
        <Link href="/meditate" className="nav-link">Meditate</Link>
        <Link href="/back" className="nav-link">Back</Link>
        <Link href="/time" className="nav-link">Time</Link>
      </nav>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
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
      `}</style>
    </div>
  );
}