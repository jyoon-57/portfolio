import React from 'react';

interface VideoSoundToggleProps {
  isMuted: boolean;
  onToggle: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function VideoSoundToggle({
  isMuted,
  onToggle,
  className,
  ariaLabel,
}: VideoSoundToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={className}
      aria-label={ariaLabel || (isMuted ? 'Unmute' : 'Mute')}
    >
      {isMuted ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1" />
          <path
            d="M10.5 8L8 10H6V14H8L10.5 16V8Z"
            fill="white"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Shifted down +1.5 to center on Y=12. Matches Mute X center (12) */}
          <path
            d="M15.54 10.46L12.71 13.29"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.71 10.46L15.54 13.29"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1" />
          <path
            d="M10 8L7.5 10H5.5V14H7.5L10 16V8Z"
            fill="white"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Shifted down +1.5 to center on Y=12 */}
          <path
            d="M13.5 10.5C14.5 11.16667 14.5 12.8333 13.5 13.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 9C17 10.5 17 13.5 15.5 15"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
