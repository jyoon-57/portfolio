'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

// Helper: Extract URL from "url("...")"
const extractUrl = (bgImage: string) => {
  const match = bgImage.match(/url\(["']?(.*?)["']?\)/);
  return match ? match[1] : null;
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [arrowColor, setArrowColor] = useState('#1e1e1e');
  const arrowRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageCache = useRef<Map<string, HTMLImageElement>>(new Map());
  const lastCheckRef = useRef(0);

  // Constants
  const DEFAULT_COLOR = '#1e1e1e';
  const ALT_COLOR = '#f5f5f5';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const checkVisibility = useCallback(() => {
    // Standard: 2000px scroll on 1920px width
    // Formula: Threshold = (CurrentWidth / 1920) * 2000
    const screenWidth = window.innerWidth;
    const threshold = (screenWidth / 1920) * 2000;

    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const getPixelBrightness = useCallback(
    (
      el: Element,
      validEl: HTMLElement | HTMLVideoElement,
      x: number,
      y: number,
    ): number | null => {
      // Create canvas if not exists
      if (!canvasRef.current) {
        canvasRef.current = document.createElement('canvas');
        canvasRef.current.width = 1;
        canvasRef.current.height = 1;
      }
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;

      const rect = el.getBoundingClientRect();
      const relX = x - rect.left;
      const relY = y - rect.top;

      try {
        // Case 1: Video Element
        if (validEl instanceof HTMLVideoElement) {
          // Calculate video scaling (mostly object-fit: cover or contain logic?
          // Assuming standard video tag (or CSS background) usually fits content or cover.
          // project.module.css uses standard video tag mostly.
          // Let's assume the video fills the rect (typical).
          // If object-fit is used, this might be slightly off, but acceptable.
          const vW = validEl.videoWidth;
          const vH = validEl.videoHeight;
          if (!vW || !vH) return null;

          // Simple mapping:
          const vidX = (relX / rect.width) * vW;
          const vidY = (relY / rect.height) * vH;

          ctx.drawImage(validEl, vidX, vidY, 1, 1, 0, 0, 1, 1);
        } else {
          // Case 2: Background Image
          const style = window.getComputedStyle(el);
          const bgImage = style.backgroundImage;
          const url = extractUrl(bgImage);
          if (!url) return null;

          // Check cache
          let img = imageCache.current.get(url);
          if (!img) {
            img = new Image();
            img.crossOrigin = 'anonymous'; // Try anonymous
            img.src = url;
            imageCache.current.set(url, img);
          }

          if (!img.complete || img.naturalWidth === 0) return null;

          // Assume 'background-size: cover' and 'background-position: center' (Standard)
          // Calculate Cover logic
          const imgW = img.naturalWidth;
          const imgH = img.naturalHeight;
          const elW = rect.width;
          const elH = rect.height;

          const scale = Math.max(elW / imgW, elH / imgH);
          const drawW = imgW * scale;
          const drawH = imgH * scale;
          const offsetX = (elW - drawW) / 2;
          const offsetY = (elH - drawH) / 2;

          // Map relative coords to image coords
          // relX = offsetX + imgX * scale
          // imgX = (relX - offsetX) / scale
          const imgX = (relX - offsetX) / scale;
          const imgY = (relY - offsetY) / scale;

          if (imgX < 0 || imgX >= imgW || imgY < 0 || imgY >= imgH) return null;

          ctx.drawImage(img, imgX, imgY, 1, 1, 0, 0, 1, 1);
        }

        const data = ctx.getImageData(0, 0, 1, 1).data;
        // Luma
        return 0.2126 * data[0] + 0.7152 * data[1] + 0.0722 * data[2];
      } catch (e) {
        // CORS or other error
        // console.error(e);
        return null; // Fallback
      }
    },
    [],
  );

  const checkColor = useCallback(() => {
    if (!arrowRef.current) return;

    // Throttle: 150ms
    const now = Date.now();
    if (now - lastCheckRef.current < 150) return;
    lastCheckRef.current = now;

    const rect = arrowRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const elements = document.elementsFromPoint(x, y);

    let foundColor = false;

    for (const el of elements) {
      if (arrowRef.current.contains(el)) continue;

      const style = window.getComputedStyle(el);
      const bgColor = style.backgroundColor;
      const bgImage = style.backgroundImage;

      // 1. Check for Video
      if (el instanceof HTMLVideoElement) {
        const luma = getPixelBrightness(el, el, x, y);
        if (luma !== null) {
          setArrowColor(luma < 128 ? ALT_COLOR : DEFAULT_COLOR);
          foundColor = true;
          break;
        }
      }

      // 2. Check for Background Image
      if (bgImage && bgImage !== 'none' && !bgImage.includes('gradient')) {
        // It's an element with a background image (likely div)
        const luma = getPixelBrightness(el, el as HTMLElement, x, y);
        if (luma !== null) {
          setArrowColor(luma < 128 ? ALT_COLOR : DEFAULT_COLOR);
          foundColor = true;
          break;
        }
      }

      // 3. Check for Background Color
      if (
        bgColor &&
        bgColor !== 'rgba(0, 0, 0, 0)' &&
        bgColor !== 'transparent'
      ) {
        const rgb = bgColor.match(/\d+/g);
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0], 10);
          const g = parseInt(rgb[1], 10);
          const b = parseInt(rgb[2], 10);

          const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

          if (luma < 128) {
            setArrowColor(ALT_COLOR);
          } else {
            setArrowColor(DEFAULT_COLOR);
          }
          foundColor = true;
          break;
        }
      }
    }

    if (!foundColor) {
      setArrowColor(DEFAULT_COLOR);
    }
  }, [getPixelBrightness]);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility();
      requestAnimationFrame(checkColor);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [checkVisibility, checkColor]);

  return (
    <div
      ref={arrowRef}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '6rem',
        right: '5rem', // Moved to 5rem (50px) to be well inside margin area
        zIndex: 9999,
        cursor: 'pointer',
        color: arrowColor,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.5s ease, color 0.3s ease',
      }}
    >
      <svg
        viewBox="0 0 50 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        style={{
          width: '4rem',
          height: '2rem',
        }}
      >
        <path d="M0 25 L25 0 L50 25" />
      </svg>
    </div>
  );
}
