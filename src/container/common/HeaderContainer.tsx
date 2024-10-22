import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import Header from '../../components/base/Header';
import { useNavigate } from 'react-router-dom';
import { setAuthentication } from '../../features/authentication';

const HeaderContainer = () => {

  const navigate = useNavigate();

  const authentication = useAppSelector(state => state.authentication.authentication);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    try {
      localStorage.removeItem("authentication");
      dispatch(setAuthentication(null));
    }catch (error) {
      console.error(error);
    }
    navigate("/");
  };

  return <Header authentication={authentication} onLogout={onLogout}/>
};

export default HeaderContainer;