import React, { useEffect, useState } from 'react';

interface IntroLoaderProps {
  onAnimationComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onAnimationComplete }) => {
  const [animationState, setAnimationState] = useState<'initial' | 'animate' | 'exit'>('initial');

  useEffect(() => {
    // Start animation after component mounts
    setTimeout(() => setAnimationState('animate'), 100);
    
    // Trigger exit animation after 2.5 seconds
    setTimeout(() => {
      setAnimationState('exit');
      // Wait for exit animation to complete before calling onAnimationComplete
      setTimeout(onAnimationComplete, 1000);
    }, 2500);
  }, [onAnimationComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-1000
      ${animationState === 'exit' ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className={`transform transition-all duration-1000 ease-in-out
        ${animationState === 'initial' ? 'scale-0 opacity-0' : ''}
        ${animationState === 'animate' ? 'scale-1 opacity-100' : ''}
        ${animationState === 'exit' ? 'scale-[2] opacity-0' : ''}`}
      >
        <div className="relative">
          <img 
            src="/logo.svg" 
            alt="Logo" 
            className="w-32 h-32"
          />
          <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 
            text-2xl font-semibold text-gray-900 whitespace-nowrap
            transition-all duration-1000
            ${animationState === 'initial' ? 'opacity-0 translate-y-4' : ''}
            ${animationState === 'animate' ? 'opacity-100 translate-y-0' : ''}
            ${animationState === 'exit' ? 'opacity-0 -translate-y-4' : ''}`}
          >
            Rajni
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader; 