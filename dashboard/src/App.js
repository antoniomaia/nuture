import { Route, Switch, Redirect } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Redirect from="/" to="/register" />
    </Switch>
  );
}

export default App;
