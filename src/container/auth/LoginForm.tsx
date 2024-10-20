import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../features/authentication';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate();

  const {formData, authentication, error} = useAppSelector(state => ({
    formData: state.authentication.form.login,
    authentication: state.authentication.authentication,
    error: state.authentication.error
  }));
  const dispatch = useAppDispatch();

  const onChange = (name: string, value: string) => {
    if (name === 'username' || name === 'password') {
      dispatch(changeField({ form: 'login', key: name, value }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if(error) {
      console.error(`로그인 오류 발생: ${error}`);
      setLoginError('로그인 오류');
      return;
    }
  }, [error]);

  useEffect(() => {
    if(authentication) {
      navigate("/");
    }
  }, [authentication, navigate]);

  return (
    <AuthForm formData={formData} type={`LOGIN`} onSubmit={onSubmit} onChange={onChange} error={loginError}/>
  );
};

export default LoginForm;