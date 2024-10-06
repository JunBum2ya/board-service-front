import AuthForm from '../../components/auth/AuthForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent } from 'react';
import { changeField } from '../../features/AuthFormReducer';

const JoinForm = () => {

  const formData = useAppSelector(state => state.authForm.join);
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (name: string, value: string) => {
    if(name === 'username' || name === 'password' || name === 'passwordConfirm') {
      dispatch(changeField({type: 'join', key: name, value: value }));
    }
  };

  return (
    <AuthForm type={`JOIN`} formData={formData} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default JoinForm;