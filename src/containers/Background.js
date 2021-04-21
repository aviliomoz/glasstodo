import React from 'react';

export const Background = ({ children }) => {
  return (
    <div className="background">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="background-glass">{children}</div>
    </div>
  );
};
