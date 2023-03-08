import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import './global.css'
import store from './redux/store'
import axios from 'axios';


const audience = import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE;
export const apiKey = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN
const client = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID

// axios.defaults.baseURL = 'https://capacitechkidsback-production-2437.up.railway.app'

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
