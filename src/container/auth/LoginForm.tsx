import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../features/AuthFormReducer';

const LoginForm = () => {
  const formData = useAppSelector(state => state.authForm.login);
  const dispatch = useAppDispatch();

  const onChange = (name: string, value: string) => {
    dispatch(changeField({
      type: 'login',
      key: name,
      value
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch]);

  return (
    <AuthForm formData={formData} type={`LOGIN`} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default LoginForm;