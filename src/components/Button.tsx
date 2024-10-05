import React from 'react';
import '../styles/components/Button.scss';

const Button = ({children, style} : ButtonProps) => {
  return (
    <button className={`custom-button`} style={style}>{children}</button>
  )
};

type ButtonProps = {
  children: React.ReactNode;
  style?: {
    backgroundColor?: string;
    hoverBackGroundColor?: string;
  }
};

export default Button;