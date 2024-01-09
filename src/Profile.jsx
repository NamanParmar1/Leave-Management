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
