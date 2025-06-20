import React from 'react';
import { LoadingIndicatorProps } from '../types';

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading, message = 'Processing...' }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-indicator" role="status" aria-live="polite">
      <div className="loading-spinner"></div>
      <span className="loading-text">{message}</span>
    </div>
  );
};

export default LoadingIndicator;