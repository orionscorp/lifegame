// pages/back.js
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Back() {
  const [boostMode, setBoostMode] = useState(false);
  const [reminders, setReminders] = useState([
    { id: 1, time: '7:15 AM', active: true },
    { id: 2, time: '9:45 PM', active: true }
  ]);

  const toggleReminder = (id) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, active: !reminder.active } 
          : reminder
      )
    );
  };

  const toggleBoostMode = () => {
    setBoostMode(!boostMode);
  };

  return (
    <div className="container">
      <h1>Back</h1>
      
      <div className="back-section">
        <h2>Carrier</h2>
        <p className="time">1:37 PM</p>
        <h3>Back</h3>
      </div>
      
      <div className="back-section">
        <h3>Reminders</h3>
        <p>Remind me at these times</p>
        
        <div className="reminders-list">
          {reminders.map(reminder => (
            <div key={reminder.id} className="reminder-item">
              <span>Reminder</span>
              <span className="reminder-time">{reminder.time}</span>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={reminder.active}
                  onChange={() => toggleReminder(reminder.id)}
                />
                <span className="slider"></span>
              </label>
            </div>
          ))}
        </div>
        
        <button className="add-time-btn">Add a time</button>
        <p className="help-text">How reminders work</p>
      </div>
      
      <div className="back-section">
        <div className="boost-section">
          <p>I need something more</p>
          <div className="boost-toggle">
            <span>Boost mode</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={boostMode}
                onChange={toggleBoostMode}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="help-text">How boost works</p>
        </div>
      </div>
      
      <nav className="nav">
        <Link href="/meditate" className="nav-link">Back to Meditate</Link>
        <Link href="/time" className="nav-link">Time</Link>
      </nav>
    </div>
  );
}