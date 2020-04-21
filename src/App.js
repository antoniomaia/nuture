import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Layout from './pages/layout';
import Home from './pages/home';
import Calculator from './pages/calculator';
import About from './pages/about';
import Terms from './pages/terms-conditions';
import Policy from './pages/privacy-policy';
import InfoResults from './pages/info-results';

import DynamicTransition from './components/global/dynamic-transition';
import Articles from './pages/articles';

function App() {
  const location = useLocation();
  return (
    <Layout>
      <DynamicTransition location={location}>
        <Switch location={location}>
          <Route path="/" component={Home} exact />
          <Route path="/calculator" exact component={Calculator} />
          <Route path="/about" exact component={About} />
          <Route path="/terms-conditions" exact component={Terms} />
          <Route path="/privacy-policy" exact component={Policy} />
          <Route path="/climate-change" exact component={Articles} />
          <Route path="/carbon-report-sources" exact component={InfoResults} />
          <Route component={() => <h1>Oops! Page not found!</h1>} />
        </Switch>
      </DynamicTransition>
    </Layout>
  );
}

export default App;
