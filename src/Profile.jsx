



import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

export const useUserData = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (authState && authState.isAuthenticated) {
        try {
          const userInfo = await oktaAuth.authState.idToken.claims;
          setUserData(userInfo);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [authState, oktaAuth]);

  return userData;
};

// export const getUserData = async () => {
//   const { authState, oktaAuth } = useOktaAuth();
//   const [userInfo, setUserInfo] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (!authState || !authState.isAuthenticated) {
//       // When user isn't authenticated, forget any user info
//       setUserInfo(null);
//     } else {
//       setUserInfo(authState.idToken.claims);
//       const { name, email } = userInfo;
//       setUser({ name, email });
     
//     }
//   }, [authState, oktaAuth]); 
  
//   return user;
// };

// export const Profile = () => {
//   const { authState, oktaAuth } = useOktaAuth();
//   const [userInfo, setUserInfo] = useState(null);
//   const [user, setUser] = useState(null);


//   useEffect(() => {
//     if (!authState || !authState.isAuthenticated) {
//       // When user isn't authenticated, forget any user info
//       setUserInfo(null);
//     } else {
//       setUserInfo(authState.idToken.claims);
//       const { name, email } = authState.idToken.claims;
//       setUser({ name, email });
//       //console.log(userInfo);
//       // You can also get user information from the `/userinfo` endpoint
//       /*oktaAuth.getUser().then((info) => {
//         setUserInfo(info);
//       });*/
//     }
//   }, [authState, oktaAuth]); // Update if authState changes

//   if (!userInfo) {
//     return <p>Loading user profile...</p>;
//   }
//   //

//   return (
//     <div>
//       <div>
//         <Header as="h1">
//           <Icon name="drivers license" />
//           {' '}
//           My User Profile (ID Token Claims)
//           {' '}
//         </Header>
//         <p>
//           Below is the information from your ID token which was obtained during the &nbsp;
//           <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
//           {' '}
//           and is now stored in local storage.
//         </p>
//         <p>
//           This route is protected with the
//           {' '}
//           <code>&lt;SecureRoute&gt;</code>
//           {' '}
//           component, which will ensure that this page cannot be accessed until you have authenticated.
//         </p>
//         <Table>
//           <thead>
//             <tr>
//               <th>Claim</th>
//               <th>Value</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(userInfo).map((claimEntry) => {
//               const claimName = claimEntry[0];
//               const claimValue = claimEntry[1];
//               const claimId = `claim-${claimName}`;
//               //console.log(userInfo);
//               return (
//                 <tr key={claimName}>
//                   <td>{claimName}</td>
//                   <td id={claimId}>{claimValue.toString()}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };


