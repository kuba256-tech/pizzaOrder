import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

interface Props extends PropsWithChildren {
  isAllowed: boolean | null;
}

const ProtectedRoute: React.FC<Props> = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <NavLink to="/" />;
  }

  return children;
};

export default ProtectedRoute;
