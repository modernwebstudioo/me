'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'scale-down';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  className = '',
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-up': return 'opacity-0 translate-y-12';
      case 'fade-down': return 'opacity-0 -translate-y-12';
      case 'fade-left': return 'opacity-0 translate-x-12';
      case 'fade-right': return 'opacity-0 -translate-x-12';
      case 'scale-up': return 'opacity-0 scale-90';
      case 'scale-down': return 'opacity-0 scale-110';
      default: return 'opacity-0 translate-y-12';
    }
  };

  const getFinalStyles = () => {
    switch (animation) {
      case 'fade-up':
      case 'fade-down': return 'opacity-100 translate-y-0';
      case 'fade-left':
      case 'fade-right': return 'opacity-100 translate-x-0';
      case 'scale-up':
      case 'scale-down': return 'opacity-100 scale-100';
      default: return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${className} ${isVisible ? getFinalStyles() : getInitialStyles()}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
