import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-77557535.okta.com/oauth2/default',
  clientId: '0oadon7t04XrF2PeR5d7',
  redirectUri: window.location.origin + '/login/callback'
});

export default oktaAuth;
