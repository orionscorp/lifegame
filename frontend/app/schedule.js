// pages/schedule.js
import Link from 'next/link';
import { useState } from 'react';

export default function Schedule() {
  const [days, setDays] = useState({
    s: false, m: false, t: false, w: false, t2: false, f: false, s2: false
  });
  const [times, setTimes] = useState({
    morning: false,
    afternoon: false,
    evening: false
  });

  const toggleDay = (day) => {
    setDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const toggleTime = (time) => {
    setTimes(prev => ({ ...prev, [time]: !prev[time] }));
  };

  return (
    <div className="container">
      <h1>Schedule</h1>
      
      <div className="schedule-section">
        <p>I want to repeat this habit</p>
        <div className="option-group">
          <button className="option-btn">daily</button>
          <button className="option-btn">weekly</button>
          <button className="option-btn">monthly</button>
        </div>
        
        <p>on these days</p>
        <div className="days-grid">
          {Object.entries(days).map(([day, selected]) => (
            <button
              key={day}
              className={`day-btn ${selected ? 'selected' : ''}`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      
      <div className="schedule-section">
        <p>I will do it at these times</p>
        <div className="time-options">
          <div className="time-option">
            <span>Morning</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={times.morning}
                onChange={() => toggleTime('morning')}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="time-option">
            <span>Afternoon</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={times.afternoon}
                onChange={() => toggleTime('afternoon')}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="time-option">
            <span>Evening</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={times.evening}
                onChange={() => toggleTime('evening')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
      
      <nav className="nav">
        <Link href="/life-log" className="nav-link">Back to Life Log</Link>
        <Link href="/meditate" className="nav-link">Meditate</Link>
      </nav>
    </div>
  );
}