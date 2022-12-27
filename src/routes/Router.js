import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { getLocalStorageToken } from '../utils/local-storage-fn';

function Router() {
  const isLogin = getLocalStorageToken();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute isLogin={isLogin}>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute isLogin={isLogin}>
            <Todos />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      {/* TODO: Error boundary 확인  */}
    </Routes>
  );
}

export default Router;
