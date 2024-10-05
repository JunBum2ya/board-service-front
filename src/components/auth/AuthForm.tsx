import React from 'react';
import '../../styles/auth/AuthForm.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

const typeMap = {
  LOGIN: '로그인',
  JOIN: '회원가입'
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {

  const text = typeMap[type];

  return (
    <div className={`auth-form`}>
      <h3>{text}</h3>
      <form>
        {type === 'JOIN' ? <JoinForm /> : <LoginForm />}
        <Button>{text}</Button>
      </form>
      <div className={`auth-footer`}>
        {type === 'LOGIN' ? (
          <Link to={`/auth/join`}>회원가입</Link>
        ) : (
          <Link to={`/auth/login`}>로그인</Link>
        )}
      </div>
    </div>
  );
};

type FormType = 'LOGIN' | 'JOIN';

type AuthFormProps = {
  type: FormType;
};

const LoginForm = () => {
  return (
    <>
      <input autoComplete={`username`} name={`username`} placeholder={`아이디`} />
      <input autoComplete={`new-password`} name={`password`} placeholder={`비밀번호`} type={`password`} />
    </>
  );
};

const JoinForm = () => {
  return (
    <>
      <input autoComplete={`username`} name={`username`} placeholder={`아이디`} />
      <input autoComplete={`new-password`} name={`password`} placeholder={`비밀번호`} type={`password`} />
      <input autoComplete={`new-password`} name={`passwordConfirm`} placeholder={`비밀번호 확인`} type={`password`} />
    </>
  );
};

export default AuthForm;