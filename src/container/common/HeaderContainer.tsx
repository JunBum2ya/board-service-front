import { useAppSelector } from '../../hooks/reduxHooks';
import Header from '../../components/base/Header';

const HeaderContainer = () => {
  const authentication = useAppSelector(state => state.authentication.authentication);
  return <Header authentication={authentication}/>
};

export default HeaderContainer;