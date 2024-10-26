import React, { ReactNode } from 'react';
import '../styles/components/responsive.scss';

const Responsive:React.FC<ResponsiveProps> = ({children}) => {
  return (
    <div className={`responsive`}>{children}</div>
  );
};

type ResponsiveProps = {
  children: ReactNode
};

export default Responsive;