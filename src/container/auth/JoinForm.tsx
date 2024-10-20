import AuthForm from '../../components/auth/AuthForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FormEvent, useEffect, useState } from 'react';
import { changeField, initializeForm, join } from '../../features/authentication';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {

  const navigate = useNavigate();

  const [joinError, setJoinError] = useState<string | null>(null);

  const { formData, authentication, error } = useAppSelector(state => ({
    formData: state.authentication.form.join,
    authentication: state.authentication.authentication,
    error: state.authentication.error
  }));
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, passwordConfirm, email, nickname } = formData;
    if([username, password, passwordConfirm, email].includes('')) {
      setJoinError('빈 칸을 모두 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setJoinError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({form: 'join', key: 'password', value: ''}));
      dispatch(changeField({form: 'join', key: 'passwordConfirm', value: ''}));
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
      console.error(`회원가입 오류 발생 : ${error}`);
      return;
    }
  }, [error]);

  useEffect(() => {
    if(authentication) {
      navigate("/");
    }
  }, [authentication, navigate]);

  return (
    <AuthForm type={`JOIN`} formData={formData} onSubmit={onSubmit} onChange={onChange} error={joinError} />
  );
};

export default JoinForm;