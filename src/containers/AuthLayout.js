import React from 'react';

export const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout-header">
        <div className="auth-layout-header-logo">
          <div className="auth-layout-header-logo-card-1"></div>
          <div className="auth-layout-header-logo-card-2"></div>
          <div className="auth-layout-header-logo-card-3"></div>
        </div>
        <h1 className="auth-layout-header-title">glasstodo</h1>
      </div>
      {children}
    </div>
  );
};
