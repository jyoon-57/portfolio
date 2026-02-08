'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const titlesRef = useRef<HTMLDivElement>(null);

  // Specific refs for scroll targets
  const hciRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<HTMLDivElement>(null);

  // Handle auto-scroll on wheel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Logic applies to ALL screens
      const currentScroll = window.scrollY;
      const targetTop = titlesRef.current?.offsetTop || 0;

      // If we are in the "Intro" zone (top of page) and scrolling down
      // Threshold: Scroll position is near top (less than 100) and wheel goes down
      if (currentScroll < 100 && e.deltaY > 0) {
        e.preventDefault();
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollToElement = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Intro Section */}
      <section className={styles.introSection}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              Jaeyoon
              <br />
              Lee
            </Link>
          </div>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className={styles.hero}>
          <p>
            Jaeyoon Lee (Jyoon Lee) is a designer
            <br />
            exploring the next stage of human-computer
            <br />
            interaction, grounded in industrial design.
          </p>
        </div>

        {/* Titles placed at the bottom of the Intro Section */}
        <div className={styles.titleRow} ref={titlesRef}>
          <h2
            className={styles.categoryTitle}
            onClick={() => scrollToElement(hciRef)}
            style={{ cursor: 'pointer' }}
          >
            Human Computer Interaction Research
          </h2>
          <h2
            className={styles.categoryTitle}
            onClick={() => scrollToElement(idRef)}
            style={{ cursor: 'pointer' }}
          >
            Industrial Design Works
          </h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        {/* Column 1: HCI Research */}
        <div className={styles.column}>
          <div className={styles.projectCard} ref={hciRef}>
            <Link href="/work/magritte" className={styles.projectLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/magritteThumnail.jpg"
                  alt="Hand Gesture Driven Audio Control System"
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>
                  Hand Gesture Driven Audio Control System
                </h3>
                <p className={styles.projectDate}>5.2025</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Column 2: Industrial Design */}
        <div className={styles.column}>
          <div className={styles.projectCard} ref={idRef}>
            <Link href="/work/saga" className={styles.projectLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/sagaThumnail.jpg"
                  alt="SAGA"
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>SAGA</h3>
                <p className={styles.projectDate}>2024</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerCredit}>
          Site built by <span className={styles.boldText}>Jaeyoon Lee</span>{' '}
          with <span className={styles.boldText}>Antigravity</span>
        </p>
        <p className={styles.footerCopyright}>© 2026 Jaeyoon Lee</p>
      </footer>
    </div>
  );
}
