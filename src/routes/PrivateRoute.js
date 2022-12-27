import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLogin }) => {
  return isLogin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
