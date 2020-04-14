import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Layout from './pages/layout';
import Home from './pages/home';
import Calculator from './pages/calculator';
import DynamicTransition from './components/global/dynamic-transition';

function App() {
  const location = useLocation();
  return (
    <Layout>
      <DynamicTransition location={location}>
        <Switch location={location}>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" exact component={Calculator} />
          <Route path="/about" component={() => <div>about</div>} />
          <Route component={() => <h1>Oops! Page not found!</h1>} />
        </Switch>
      </DynamicTransition>
    </Layout>
  );
}

export default App;
