import React, { useEffect, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Layout from './pages/layout';
import DynamicTransition from './components/global/dynamic-transition';
import { isProduction } from './utils/env';

const Home = React.lazy(() => import('./pages/home'));
const Calculator = React.lazy(() => import('./pages/calculator'));
const About = React.lazy(() => import('./pages/about'));
const Terms = React.lazy(() => import('./pages/terms-conditions'));
const Policy = React.lazy(() => import('./pages/privacy-policy'));
const InfoResults = React.lazy(() => import('./pages/info-results'));
const NotFound = React.lazy(() => import('./pages/not-found'));
const GetStarted = React.lazy(() => import('./pages/get-started'));
const Articles = React.lazy(() => import('./pages/articles'));

const onPageLoad = (path) => {
  if (isProduction) ReactGA.pageview(path);
};

function App() {
  const location = useLocation();

  useEffect(() => {
    onPageLoad(location.pathname);
  }, [location]);

  useEffect(() => {
    /* Chat script */
    const scriptChat = document.createElement('script');
    scriptChat.type = 'text/javascript';
    scriptChat.id = 'hs-scriptChat-loader';
    scriptChat.async = true;
    scriptChat.defer = true;
    scriptChat.src = 'https://js.hs-scripts.com/8698910.js';

    document.body.appendChild(scriptChat);

    return () => {
      document.body.appendChild(scriptChat);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <DynamicTransition location={location}>
          <Switch location={location}>
            <Route
              path="/"
              render={(props) => (
                <Home {...props} onPageLoad={onPageLoad('/')} />
              )}
              exact
            />
            <Route path="/calculator" exact component={Calculator} />
            <Route path="/about" exact component={About} />
            <Route path="/terms-conditions" exact component={Terms} />
            <Route path="/privacy-policy" exact component={Policy} />
            <Route path="/climate-change" exact component={Articles} />
            <Route
              path="/carbon-report-sources"
              exact
              component={InfoResults}
            />
            <Route path="/get-started" exact component={GetStarted} />
            <Route component={NotFound} />
          </Switch>
        </DynamicTransition>
      </Layout>
    </Suspense>
  );
}

export default App;
