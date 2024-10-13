import React, { ChangeEvent, FormEventHandler, useCallback } from 'react';
import '../../styles/auth/AuthForm.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

const typeMap = {
  LOGIN: '로그인',
  JOIN: '회원가입'
};

const AuthForm: React.FC<AuthFormProps> = ({ type, formData, onSubmit, onChange }) => {

  const text = typeMap[type];

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    onChange(name, value);
  }, [onChange]);

  return (
    <div className={`auth-form`}>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <input autoComplete={`username`} name={`username`} placeholder={`아이디`} onChange={onInputChange}
               value={formData.username} />
        <input autoComplete={`new-password`} name={`password`} placeholder={`비밀번호`} type={`password`}
               onChange={onInputChange} value={formData.password} />
        {type === 'JOIN' &&
          <>
            <input autoComplete={`new-password`} name={`passwordConfirm`} placeholder={`비밀번호 확인`} type={`password`}
                   onChange={onInputChange} value={formData.passwordConfirm} />
            <input autoComplete={`email`} name={`email`} placeholder={`이메일`} type={`email`} onChange={onInputChange}
                   value={formData.email} />
            <input autoComplete={`nickname`} name={`nickname`} placeholder={`닉네임`} type={`text`}
                   onChange={onInputChange} value={formData.nickname}/>
          </>
        }
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
  formData: {
    username: string;
    password: string;
    passwordConfirm?: string;
    email?: string;
    nickname?: string;
  }
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: (name: string, value: string) => void;
};

export default AuthForm;