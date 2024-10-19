import AuthForm from '../../components/auth/AuthForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect } from 'react';
import { changeField, initializeForm, join } from '../../features/authentication';

const JoinForm = () => {

  const { formData, authentication, error } = useAppSelector(state => ({
    formData: state.authentication.form.join,
    authentication: state.authentication.authentication,
    error: state.authentication.error
  }));
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, passwordConfirm, email, nickname } = formData;
    if (password !== passwordConfirm) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }
    dispatch(join({ username, password, email, nickname }));
  };

  const onChange = (name: string, value: string) => {
    if (name === 'username' || name === 'password' || name === 'passwordConfirm' || name === 'email' || name === 'nickname') {
      dispatch(changeField({ form: 'join', key: name, value: value }));
    }
  };

  useEffect(() => {
    dispatch(initializeForm('join'));
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
    <AuthForm type={`JOIN`} formData={formData} onSubmit={onSubmit} onChange={onChange} />
  );
};

export default JoinForm;