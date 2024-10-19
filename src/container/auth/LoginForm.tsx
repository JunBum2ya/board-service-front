import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, login } from '../../features/authentication';

const LoginForm = () => {
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
      console.error('회원가입 오류 발생');
      console.error(error);
      return;
    }
    if(authentication) {
      console.log('회원 가입 성공');
      console.log(authentication);
    }
  }, [authentication, error]);

  return (
    <AuthForm formData={formData} type={`LOGIN`} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default LoginForm;