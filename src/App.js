import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/home";
import Calculator from "./pages/calculator";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} exact />
        <Route path="/about" component={() => <div>about</div>} />
        <Route component={() => <h1>Oops! Page not found!</h1>} />
      </Switch>
    </Layout>
  );
}

export default App;
