import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import logo from './logo.png'
import './LoginPage.css';


const LoginPage = () => {
  const { oktaAuth, authState } = useOktaAuth();

  
  if(localStorage.getItem('hasToastShown')){
    localStorage.removeItem('hasToastShown');
  }
  if(localStorage.getItem('hasLeaveToastShown')){
    localStorage.removeItem('hasLeaveToastShown');
  }
  
  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const logout = async () => {
    await oktaAuth.signOut();
  };

  let body = null;

 
    body = (
      <div className="cardforlogin">
        <img src={logo} className="logoofapp" alt="logo" />
        <div className="Buttonslogin">
          <button className="btn-login" onClick={login}>Login</button>
        </div>
      </div>
    );
  

  return (
    <div>
      <header className="login-page">
        {body}
      </header>
    </div>
  );
};

export default LoginPage;

