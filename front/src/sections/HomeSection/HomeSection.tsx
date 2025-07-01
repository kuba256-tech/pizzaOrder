import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../users-login-signin/usersSlice';

const HomeSection = () => {
  const currentUser = useAppSelector(selectUser);

  console.log(currentUser);

  return <div></div>;
};

export default HomeSection;
