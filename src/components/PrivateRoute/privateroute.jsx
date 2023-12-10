// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const PrivateRoute = ({element: Component}) => {
  const { authState } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) {
    // If authState is null or isAuthenticated is false, redirect to the login page
    return <Navigate to="/" />;
  }

  return <Component />
};

export default PrivateRoute;
