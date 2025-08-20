// pages/meditate.js
import Link from 'next/link';

export default function Meditate() {
  return (
    <div className="container">
      <h1>Meditate</h1>
      
      <div className="meditate-section">
        <h2>What youve accomplished</h2>
        <div className="stats-grid">
          <div className="stat">
            <span className="stat-label">Total times done</span>
            <span className="stat-value">42</span>
          </div>
          <div className="stat">
            <span className="stat-label">Current streak</span>
            <span className="stat-value">7 days</span>
          </div>
          <div className="stat">
            <span className="stat-label">Best streak</span>
            <span className="stat-value">21 days</span>
          </div>
        </div>
      </div>
      
      <div className="meditate-section">
        <h2>Week by week</h2>
        <ul className="week-list">
          <li>This week</li>
          <li>Last week</li>
          <li>3rd May</li>
          <li>26th Apr</li>
          <li>19th Apr</li>
        </ul>
      </div>
      
      <nav className="nav">
        <Link href="/schedule" className="nav-link">Back to Schedule</Link>
        <Link href="/back" className="nav-link">Back</Link>
      </nav>
    </div>
  );
}