import Button from '../Button';
import '../../styles/components/Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { Authentication } from '../../types/auth/authentication';

const Header: React.FC<HeaderProps> = ({ authentication, onLogout }) => {

  return (
    <>
      <div className={`header-block`}>
        <div className={`header-wrapper`}>
          <Link to={`/`} className={`logo-area`}>REACTERS</Link>
          {
            authentication ? (
              <div className={`right`}>
                <div className={`user-info`}>{authentication.username}</div>
                <Button onClick={onLogout}>로그아웃</Button>
              </div>
            ) : (
              <div className={`right`}>
                <Button to={`/auth/login`} className={'full-width'}>로그인</Button>
              </div>
            )
          }
        </div>
      </div>
      <div className={`spacer`}></div>
    </>
  );
};

type HeaderProps = {
  authentication?: Authentication | null;
  onLogout: () => void;
};

export default Header;