// components/ProgressBarCircle.jsx
'use client'; // Client Component to use useEffect and DOM manipulation

import React, { useEffect, useRef } from 'react';

const ProgressBarCircle = ({ percent, label }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    // This is a placeholder for your actual progress bar library initialization.
    // You would typically initialize a library like Circle Progress, jQuery Knob, etc. here.
    // Example (if using a hypothetical jQuery-based library or custom logic):
    if (circleRef.current) {
      // Assuming 'progressbar' class is used by a script that reads data-percent
      // For a simple visual, we can manipulate CSS custom properties or directly styles.
      // For a real animated circle, you'd integrate a library.
      // E.g., if you have a custom CSS variable based approach:
      circleRef.current.style.setProperty('--progress-percent', percent);

      // Or if using a library like 'progressbar.js' (install it first):
      // import ProgressBar from 'progressbar.js';
      // const bar = new ProgressBar.Circle(circleRef.current, {
      //   strokeWidth: 6,
      //   easing: 'easeInOut',
      //   duration: 1400,
      //   color: '#007bff', // Primary color
      //   trailColor: '#eee',
      //   trailWidth: 1,
      //   svgStyle: null
      // });
      // bar.animate(percent / 100); // Value from 0.0 to 1.0
    }
  }, [percent]); // Re-run if percent changes

  return (
    <div className="xl:w-150 progressbar text-center">
      <div className="circle" ref={circleRef} data-percent={percent}>
        <div className="text-secondary absolute top-[44%] left-1/2 -mt-20 -ml-86 w-full text-center xl:leading-40 leading-28 text-4xl xl:[transform:translate(10px,10px)] [transform:translate(5px,10px)] font-bold">
          {percent}%
        </div>
      </div>
      <h2 className="xxl:text-lg sm:text-base text-sm font-semibold capitalize font-sora text-secondary xxl:pt-10">
        {label}
      </h2>
    </div>
  );
};

export default ProgressBarCircle;