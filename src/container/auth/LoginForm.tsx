import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../features/authentication';

const LoginForm = () => {
  const formData = useAppSelector(state => state.authentication.form.login);
  const dispatch = useAppDispatch();

  const onChange = (name: string, value: string) => {
    if (name === 'username' || name === 'password') {
      dispatch(changeField({ form: 'login', key: name, value }));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm formData={formData} type={`LOGIN`} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default LoginForm;