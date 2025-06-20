import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ onRefresh }) => {
  return (
    <div className="header">
      <h1>Task Management App</h1>
      <p>Manage your daily tasks efficiently</p>
      <button 
        onClick={onRefresh} 
        className="refresh-button"
        aria-label="Refresh tasks from storage"
      >
        Refresh
      </button>
    </div>
  );
};

export default Header;