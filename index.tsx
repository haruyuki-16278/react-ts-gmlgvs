import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import ClassComponent from './class';
import functionalComponent from './functional';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

ReactDOM.render(
  <Provider store={state}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/class" component={ClassComponent}>
      </Switch>
    </Router>
  </Provider>,
  root
);
