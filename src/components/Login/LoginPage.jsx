import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import logo from './logo.png'
import './LoginPage.css';


const LoginPage = () => {
  const { oktaAuth, authState } = useOktaAuth();

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
        {/* <p className="team-name">Welcome</p> */}
        <div className="Buttonslogin">
          <button className="btn-login" onClick={login}>Login</button>
        </div>
      </div>
    );
  

  return (
    <div>
      <header>
      <body className="login-page">
        {body}
      </body>
      </header>
    </div>
  );
};

export default LoginPage;






// if (authState?.isAuthenticated) {
//   body = (
//     <div style={{ textAlign: 'center' }}>
//       {/* <div className="Buttons">
//         <button onClick={logout}>Logout</button> */}
//       </div>
//     // </div>
//   );
// }