'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollElementRef = useRef(null);

  const scrollPercentage = () => {
    const scrollTopPos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollVal = Math.round((scrollTopPos / calcHeight) * 100);
    
    setScrollValue(scrollVal);
    
    // Set active state if scroll position > 100px
    if (scrollTopPos > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    scrollPercentage();
    window.addEventListener('scroll', scrollPercentage);
    return () => {
      window.removeEventListener('scroll', scrollPercentage);
    };
  }, []);

  const backgroundStyle = {
    background: `conic-gradient(#5C91C1 ${scrollValue}%, #fff ${scrollValue}%)`
  };

  return (
    <>
      <div 
        id="scroll-percentage"
        ref={scrollElementRef}
        className={isActive ? 'active' : ''}
        style={backgroundStyle}
        onClick={scrollToTop}
      >
        <span id="scroll-percentage-value">
          {scrollValue < 99 ? `${scrollValue}%` : <ArrowUp size={20} />}
        </span>
      </div>
    </>
  );
};

export default ScrollToTop;