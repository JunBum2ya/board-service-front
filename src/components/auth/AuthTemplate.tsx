import React from 'react';
import '../../styles/auth/AuthTemplate.scss';
import { Link } from 'react-router-dom';

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className={`auth-template-block`}>
      <div className={`white-box`}>
        <div className={`logo-area`}>
          <Link to={`/`}>REACTORS</Link>
        </div>
        {children}
      </div>
    </div>
  );
};

type AuthTemplateProps = {
  children: React.ReactNode;
};

export default AuthTemplate;