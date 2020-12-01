import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {Auth0Provider} from '@auth0/auth0-react'

const domain="dev-tneazixd.us.auth0.com"
const cliendid="CtWzL7VomXnZCvoer6f6A4AqmzW1eJFx"


ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={cliendid}
  redirectUri={window.location.origin}
  >

    <Routes />
    </Auth0Provider>,
  document.getElementById('root')
);

