// pages/time.js
"use client";

import Link from 'next/link';

export default function Time() {
  return (
    <div className="container">
      <h1>Time</h1>
      
      <ul className="time-list">
        <li>All done</li>
        <li>Some done</li>
        <li>Total perfect days</li>
        <li>Your current streak</li>
      </ul>
      
      <nav className="nav">
        <Link href="/back" className="nav-link">Back</Link>
        <Link href="/" className="nav-link">Home</Link>
      </nav>
    </div>
  );
}