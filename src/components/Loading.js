import React from 'react';
import { Background } from '../containers/Background';

export const Loading = () => {
  return (
    <Background>
      <div className="loading-logo">
        <div className="loading-logo-card-1"></div>
        <div className="loading-logo-card-2"></div>
        <div className="loading-logo-card-3"></div>
      </div>
    </Background>
  );
};
