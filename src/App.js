import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import { ContextProvider } from './context';
import Store from './store';

require('dot-env');

function App() {
  const store = process.env.REACT_APP_STORE;
  return (
    <div>
        {
          store === 'redux' ?
          <Provider store={Store}>
            <Routes />
          </Provider> :
          <ContextProvider>
            <Routes />
          </ContextProvider>
        }
    </div>
  );
}

export default App;
