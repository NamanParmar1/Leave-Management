// import React, { useState, useEffect } from 'react';
// import { useOktaAuth } from '@okta/okta-react';

// const Profile = () => {
//   const { authState, oktaAuth } = useOktaAuth();
//   const [userInfo, setUserInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       if (authState.isAuthenticated) {
//         try {
//           // Check local storage for user information
//           const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));

//           if (storedUserInfo) {
//             // If user information is found in local storage, use it
//             setUserInfo(storedUserInfo);
//           } else {
//             // Otherwise, fetch user information from Okta
//             const user = await oktaAuth.getUser();
//             setUserInfo(user);

//             // Store user information in local storage
//             localStorage.setItem('userInfo', JSON.stringify(user));
//           }
//         } catch (error) {
//           console.error('Error fetching user information:', error);
//         } finally {
//           // Set loading state to false when the user information is fetched
//           setIsLoading(false);
//         }
//       }
//     };

//     fetchUserInfo();
//   }, [authState, oktaAuth]);

//   if (isLoading) {
//     return (
//       <div>
//         <p>Fetching user profile...</p>
//       </div>
//     );
//   }

//   if (!userInfo) {
//     return null;
//   }

//   return (
//     <div>
//       <div>
//         <p>Welcome, {userInfo.name}!</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;
