import React, { useCallback } from 'react';
import '../styles/components/Button.scss';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ children, style, to, onClick, className }: ButtonProps) => {

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [navigate, to, onClick]);

  return to ? <Link className={`custom-button ${className && className}`} style={style} to={to}>{children}</Link> :
    <button className={`custom-button`} style={style} onClick={onButtonClick}>{children}</button>;
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: {
    backgroundColor?: string;
    hoverBackGroundColor?: string;
  },
  to?: string;
  onClick?: () => void;
};

export default Button;