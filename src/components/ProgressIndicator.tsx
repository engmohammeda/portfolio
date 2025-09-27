import { useEffect, useState } from 'react';

export const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-survey-orange to-survey-blue transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="absolute top-0 right-4 h-full flex items-center">
        <div className="w-8 h-8 relative">
          <svg 
            className="w-8 h-8 transform -rotate-90" 
            viewBox="0 0 36 36"
          >
            <circle
              className="text-background/20"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
            <circle
              className="text-survey-orange"
              strokeWidth="3"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="16"
              cx="18"
              cy="18"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-survey-orange">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};