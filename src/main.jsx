import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import './global.css'
import store from './redux/store'
const domain = 'dev-nthm3x2u4nohqdcs.us.auth0.com';  //process.env.REACT_APP_AUTH0_DOMAIN;
const client = '8lHJo8BMdmHtsusB5oP3DZYrk40yGVJi'; //process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = 'https://dev-nthm3x2u4nohqdcs.us.auth0.com/api/v2/';

/*
<Auth0Provider domain={doamin} clientId={clientId} authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={client}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}>
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
