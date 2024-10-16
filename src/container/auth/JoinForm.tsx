import AuthForm from '../../components/auth/AuthForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect } from 'react';
import { changeField, initializeForm } from '../../features/authentication';

const JoinForm = () => {

  const formData = useAppSelector(state => state.authentication.form.join);
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (name: string, value: string) => {
    if (name === 'username' || name === 'password' || name === 'passwordConfirm' || name === 'email' || name === 'nickname') {
      dispatch(changeField({ form: 'join', key: name, value: value }));
    }
  };

  useEffect(() => {
    dispatch(initializeForm('join'));
  }, [dispatch]);

  return (
    <AuthForm type={`JOIN`} formData={formData} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default JoinForm;