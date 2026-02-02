import { forwardRef, useRef, useEffect } from 'react';
import styles from '@/app/work/[slug]/project.module.css';
import YouTubeEmbed from '../YouTubeEmbed';

interface ProjectMediaProps {
  heroVideo?: string;
}

const ProjectMedia = forwardRef<HTMLDivElement, ProjectMediaProps>(
  ({ heroVideo }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Audio Auto-Unmute Observer for local video
    useEffect(() => {
      if (!videoRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = videoRef.current;
            if (!video) return;

            if (entry.isIntersecting) {
              video.muted = false;
            } else {
              video.muted = true;
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(videoRef.current);

      return () => observer.disconnect();
    }, []);

    const isYouTube =
      heroVideo?.includes('youtube.com') || heroVideo?.includes('youtu.be');

    if (isYouTube && heroVideo) {
      // Pass the same videoElement class to maintain the clip-path and margins
      return (
        <div ref={ref} className={styles.videoSection}>
          <YouTubeEmbed url={heroVideo} />
        </div>
      );
    }

    return (
      <div ref={ref} className={styles.videoSection}>
        {heroVideo && (
          <video
            ref={videoRef}
            className={styles.videoElement}
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
    );
  },
);

ProjectMedia.displayName = 'ProjectMedia';
export default ProjectMedia;
