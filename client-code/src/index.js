import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from 'components/App';
import Welcome from 'components/Welcome';
import Signup from 'components/auth/Signup';
import Signin from 'components/auth/Signin';
import reducers from 'components/reducers';
import Feature from 'components/Feature';
import Signout from 'components/Signout';

const mystore = createStore(
  reducers,
  { 
    auth: {authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={ mystore }>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={ Welcome } />
        <Route path="/signup" component={ Signup } />
        <Route path="/feature" component={ Feature } />
        <Route path="/signout" component={ Signout } />
        <Route path="/signin" component={ Signin } />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)

