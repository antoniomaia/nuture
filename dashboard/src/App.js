import { Route, Switch, Redirect } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { useState } from 'react';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Redirect to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 300);
  };

  const logout = () => {
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 300);
  };

  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login login={login} isAuthenticated={isAuthenticated} />
      </Route>
      <ProtectedRoute path="/dashboard" isAuthenticated={isAuthenticated}>
        <Dashboard logout={logout} />
      </ProtectedRoute>
      <Redirect from="/" to="/register" />
    </Switch>
  );
}

export default App;
