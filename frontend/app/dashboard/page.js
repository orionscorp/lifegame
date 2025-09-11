import React from 'react'
import styles from './dashboard.module.css'
import Navbar from '@/component/navbar'
import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
            <div className={styles.textSection}>
              <h1 className={styles.title}>Begin Your Health Journey</h1>
              <p className={styles.subtitle}>
                Track your meals, monitor your health, and achieve your wellness goals with our intuitive dashboard.
              </p>
              <button className={styles.startButton}>
                <span className={styles.buttonText}>START NOW</span>
              </button>
          </div>
          {/* Image */}
          <div>
            <Image
              src="/landingPage.svg"
              alt="Dashboard Illustration"
              height={500}
              width={500}
              className={styles.groupImage}
              priority
            />
          </div>
        </div>
    </div>
  )
}
