import { useEffect, useState } from 'react';

export const GeometricBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Primary geometric shapes */}
      <div className="absolute inset-0">
        {/* Survey grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--survey-orange)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--survey-orange)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-survey-orange/20 rounded-full animate-float opacity-30" />
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-survey-blue/10 rotate-45 animate-pulse"
          style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
        />
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-earth-brown/30 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Surveying instruments silhouettes */}
        <div className="absolute top-1/3 right-10 opacity-5">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-survey-orange">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-survey-orange/5 via-transparent to-survey-blue/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated survey lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-survey-orange/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: `${i * 10}%`,
              width: `${30 + i * 10}%`,
              transform: `translateX(${scrollY * (0.05 + i * 0.01)}px)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};