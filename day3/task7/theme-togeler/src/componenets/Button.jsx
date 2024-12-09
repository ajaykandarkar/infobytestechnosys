import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';

export const Button = ({ className, type, OnClick, lightTheme, darkTheme }) => {
  const { theme } = useContext(ThemeContext); 
  return (
    <button className={className} type={type} onClick={OnClick}>
      {theme === 'light' ? lightTheme : darkTheme}
    </button>
  );
};
