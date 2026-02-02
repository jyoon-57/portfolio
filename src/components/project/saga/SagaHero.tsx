'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollDown from '@/components/ScrollDown';
import styles from './saga.module.css';

export default function SagaHero() {
  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;

      if (isMobile) {
        setShowScrollDown(true);
      } else {
        // Desktop Logic
        // Calculate rendered image height (Aspect Ratio 1920:1080)
        const imgHeight = width * (1080 / 1920);

        // Calculate 10rem in pixels based on current width (1rem = width / 1920 * 10)
        // 10rem = 100 * (width / 1920)
        const tenRemInPx = (width / 1920) * 150;

        // Show arrow if image is shorter than the viewport + 10rem
        if (imgHeight < height + tenRemInPx) {
          setShowScrollDown(true);
        } else {
          setShowScrollDown(false);
        }
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollDown = () => {
    const introSection = document.getElementById('saga-intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.firstScreen}>
        {/* Header Overlay */}
        <div className={styles.headerWrapper}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoText}>
              Jaeyoon
              <br />
              Lee
            </Link>
            <nav className={styles.nav}>
              <Link href="/#about" className={styles.navLink}>
                About
              </Link>
              <Link href="/#contact" className={styles.navLink}>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Hero Image - Desktop */}
        <Image
          src="/saga_main.jpg"
          alt="Saga Project Main"
          width={1920}
          height={1080}
          className={styles.mainImageDesktop}
          priority
        />

        {/* Main Hero Image - Mobile */}
        <Image
          src="/saga_main_2.jpg"
          alt="Saga Project Main Mobile"
          width={1920}
          height={1080}
          className={styles.mainImageMobile}
        />

        {/* Samsung/RedDot Logo - Bottom Left */}
        <div className={styles.logoWrapper}>
          <Image
            src="/reddot_samsung.png"
            alt="Samsung Red Dot Award"
            width={411}
            height={100} // Placeholder
            className={styles.sagaLogo}
          />
        </div>

        {/* Scroll Down Arrow - Only on Desktop when Image < Viewport */}
        {showScrollDown && <ScrollDown onClick={handleScrollDown} />}
      </div>

      {/* SAGA Introduction Section */}
      <div id="saga-intro" className={styles.introductionSection}>
        <div className={styles.introLeft}>
          {/* Logo and Slogan */}
          <Image
            src="/saga_main_logo.jpg"
            alt="SAGA Logo and Slogan"
            width={400}
            height={120}
            className={styles.sagaMainLogo}
          />

          {/* Description Text */}
          <div className={styles.descriptionText}>
            <p>
              SAGA is an AI-powered video production crew consisting of an
              autonomous drone and a video editing application. It quietly
              accompanies family journeys, capturing unforgettable moments
              shared with loved ones.
            </p>
            <p>
              The user is free from any tasks throughout the production process.
              To allow families to forget about the camera and focus entirely on
              being present with one another.
            </p>
          </div>
        </div>

        <div className={styles.introRight}>
          <div className={styles.infoGroup}>
            {/* Award */}
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>AWARD</h3>
              <p className={styles.infoContent}>
                Winner, Red Dot Award: Design Concept 2025
              </p>
            </div>

            {/* Client */}
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>CLIENT</h3>
              <p className={styles.infoContent}>Samsung Life Insurance</p>
            </div>

            {/* Team */}
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>TEAM SAGA</h3>
              <p className={styles.infoContent}>
                Jae-yoon, Lee
                <br />
                Sun-min, Park
                <br />
                Young-bin, Kim
                <br />
                Ha-on, Jo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
