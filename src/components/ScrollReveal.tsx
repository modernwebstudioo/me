'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'scale-down'
  | 'rotate-in'
  | 'blur-in'
  | 'slide-up'
  | 'flip-up';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transitionProperty: 'opacity, transform, filter',
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    };

    if (isVisible) {
      return {
        ...base,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
        filter: 'blur(0px)',
      };
    }

    switch (animation) {
      case 'fade-up':
        return { ...base, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
      case 'fade-down':
        return { ...base, opacity: 0, transform: 'translate3d(0, -40px, 0)' };
      case 'fade-left':
        return { ...base, opacity: 0, transform: 'translate3d(50px, 0, 0)' };
      case 'fade-right':
        return { ...base, opacity: 0, transform: 'translate3d(-50px, 0, 0)' };
      case 'scale-up':
        return { ...base, opacity: 0, transform: 'scale(0.85)' };
      case 'scale-down':
        return { ...base, opacity: 0, transform: 'scale(1.15)' };
      case 'rotate-in':
        return { ...base, opacity: 0, transform: 'translate3d(0, 30px, 0) rotate(6deg)' };
      case 'blur-in':
        return { ...base, opacity: 0, filter: 'blur(12px)', transform: 'translate3d(0, 20px, 0)' };
      case 'slide-up':
        return { ...base, opacity: 0, transform: 'translate3d(0, 80px, 0)' };
      case 'flip-up':
        return { ...base, opacity: 0, transform: 'perspective(800px) rotateX(15deg) translate3d(0, 30px, 0)' };
      default:
        return { ...base, opacity: 0, transform: 'translate3d(0, 40px, 0)' };
    }
  };

  return (
    <div ref={ref} className={className} style={getStyles()}>
      {children}
    </div>
  );
}
