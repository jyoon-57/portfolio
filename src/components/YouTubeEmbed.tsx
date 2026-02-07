import { useEffect, useRef, useState } from 'react';
import styles from '@/app/work/[slug]/project.module.css';
import VideoSoundToggle from '@/components/common/VideoSoundToggle';

interface YouTubeEmbedProps {
  url: string;
  className?: string; // Expecting the videoElement class (clip-path, etc.)
  style?: React.CSSProperties; // Allow overriding wrapper styles (e.g., aspectRatio)
  isPlaying?: boolean; // External control for playback. If set, overrides internal IntersectionObserver.
  iframeStyle?: React.CSSProperties; // Allow overriding internal iframe styles (e.g. scale)
  showSoundToggle?: boolean; // Option to hide sound button (default true)
}

export default function YouTubeEmbed({
  url,
  className,
  style,
  isPlaying,
  iframeStyle,
  showSoundToggle = true,
}: YouTubeEmbedProps) {
  // Handle Origin for YouTube API Security
  // Use a ref to store origin to avoid re-renders and effect dependencies.
  // We only need it for the initial src construction.
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentOrigin = window.location.origin;
      if (currentOrigin && origin !== currentOrigin) {
        // eslint-disable-next-line
        setOrigin(currentOrigin);
      }
    }
  }, [origin]);

  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract Video ID
  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(url);

  // Toggle Mute
  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const action = isMuted ? 'unMute' : 'mute'; // Note: 'unMute' capitalized for YouTube API
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: action, args: [] }),
        '*',
      );
      setIsMuted(!isMuted);
    }
  };

  // Auto-play/Pause handling
  // If isPlaying prop is provided, we respect that.
  // Otherwise, we fall back to internal IntersectionObserver.
  useEffect(() => {
    // If external control is used
    if (typeof isPlaying === 'boolean') {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const action = isPlaying ? 'playVideo' : 'pauseVideo';
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: action, args: [] }),
          '*',
        );
      }
      return; // Skip internal observer setup
    }

    // Internal IntersectionObserver Fallback
    const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          const action = entry.isIntersecting ? 'playVideo' : 'pauseVideo';
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: action, args: [] }),
            '*',
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.1, // Trigger when 10% of the video is visible/hidden
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]); // Re-run if supervision mode changes or value changes

  if (!videoId) return null;

  // Use origin in src only if available.
  const originParam = origin ? `&origin=${origin}` : '';
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&enablejsapi=1&playsinline=1&modestbranding=1${originParam}`;

  return (
    <div
      className={
        className
      } /* Pass className here if needed, but we'll manage layout styles internally or via parent */
      style={{
        width: '100%',
        aspectRatio: '16/9', // Default Horizontal frame
        position: 'relative',
        overflow: 'hidden', // Crop the excess top/bottom of the iframe
        ...style, // Allow overrides
      }}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        playsInline
        style={{
          width: '100%',
          aspectRatio: '9/16', // Match the source aspect ratio (Shorts/Vertical) to avoid player pillarboxing
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)', // Center vertically
          pointerEvents: 'auto', // Allow interaction
          ...iframeStyle, // Apply overrides last
        }}
      />
      {/* Sound Toggle Button */}
      {/* 
        Positioning: Right side. 
        We'll place it absolute relative to the container.
      */}
      {showSoundToggle && (
        <VideoSoundToggle
          isMuted={isMuted}
          onToggle={toggleMute}
          className={styles.soundToggle}
        />
      )}
    </div>
  );
}
