import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Register from 'pages/register';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Redirect to="/login" />;
};

function App() {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login isAuthenticated={isLoggedIn} />
      </Route>
      <ProtectedRoute path="/" isAuthenticated={isLoggedIn}>
        <Dashboard />
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
