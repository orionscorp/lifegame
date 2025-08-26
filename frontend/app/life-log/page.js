// pages/life-log.js
"use client";

import Link from 'next/link';

export default function LifeLog() {
  return (
    <div className="container">
      <h1>Life Log</h1>
      
      <ul className="life-log-list">
        <li>May - 15 perfect days</li>s
        <li>All done</li>
        <li>Some done</li>
      </ul>
      
      <div className="divider"></div>
      
      <nav className="nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/schedule" className="nav-link">Schedule</Link>
      </nav>
    </div>
  );
}