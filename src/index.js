import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import App from './App';
import ScrollRestoration from './components/global/scroll-restoration';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-164078398-1');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollRestoration />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
