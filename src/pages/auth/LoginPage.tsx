import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <AuthTemplate>
        <AuthForm type={`LOGIN`}/>
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;