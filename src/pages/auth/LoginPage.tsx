import AuthTemplate from '../../components/auth/AuthTemplate';
import AuthForm from '../../components/auth/AuthForm';
import LoginForm from '../../container/auth/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <AuthTemplate>
        <LoginForm/>
      </AuthTemplate>
    </div>
  );
};

export default LoginPage;