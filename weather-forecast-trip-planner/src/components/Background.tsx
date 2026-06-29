import React from 'react';

interface BackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ imageUrl, children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};