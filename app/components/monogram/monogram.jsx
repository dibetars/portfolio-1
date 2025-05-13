import React from 'react';
import styles from './monogram.module.css';

export function Monogram({ highlight }) {
  return (
    <svg
      aria-hidden="true"
      width="46"
      height="29"
      viewBox="0 0 46 29"
      className={styles.monogram}
    >
      <defs>
        <clipPath id="monogram-clip">
          <path d="M 0 0 L 46 0 L 46 29 L 0 29 Z M 8 4 C 8 4 8 25 8 25 L 20 25 C 30 25 36 18 36 14.5 C 36 11 30 4 20 4 Z M 12 8 C 12 8 12 21 12 21 L 20 21 C 26 21 30 17 30 14.5 C 30 12 26 8 20 8 Z" />
        </clipPath>
      </defs>
      <rect
        width="46"
        height="29"
        clipPath="url(#monogram-clip)"
        className={styles.background}
      />
      <g clipPath="url(#monogram-clip)">
        <path
          d="M 0 0 L 46 0 L 46 29 L 0 29 Z M 8 4 C 8 4 8 25 8 25 L 20 25 C 30 25 36 18 36 14.5 C 36 11 30 4 20 4 Z M 12 8 C 12 8 12 21 12 21 L 20 21 C 26 21 30 17 30 14.5 C 30 12 26 8 20 8 Z"
          className={styles.foreground}
        />
      </g>
      {highlight && (
        <g clipPath="url(#monogram-clip)">
          <path
            d="M 0 0 L 46 0 L 46 29 L 0 29 Z M 8 4 C 8 4 8 25 8 25 L 20 25 C 30 25 36 18 36 14.5 C 36 11 30 4 20 4 Z M 12 8 C 12 8 12 21 12 21 L 20 21 C 26 21 30 17 30 14.5 C 30 12 26 8 20 8 Z"
            className={styles.highlight}
          />
        </g>
      )}
    </svg>
  );
}
