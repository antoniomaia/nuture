import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { useAppDispatch } from './store';
import { setAuthState } from './features/auth/authSlice';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Redirect to="/login" />;
};

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const login = () => {
    setTimeout(() => {
      dispatch(setAuthState(true));
    }, 300);
  };

  const logout = () => {
    setTimeout(() => {
      dispatch(setAuthState(false));
    }, 300);
  };

  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login login={login} isAuthenticated={isLoggedIn} />
      </Route>
      <ProtectedRoute path="/dashboard" isAuthenticated={isLoggedIn}>
        <Dashboard logout={logout} />
      </ProtectedRoute>
      <Redirect from="/" to="/register" />
    </Switch>
  );
}

export default App;
