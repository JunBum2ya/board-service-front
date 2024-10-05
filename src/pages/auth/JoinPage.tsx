import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type={`JOIN`}/>
    </AuthTemplate>
  );
};

export default JoinPage;