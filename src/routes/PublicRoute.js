import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, isLogin }) => {
  return isLogin ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
