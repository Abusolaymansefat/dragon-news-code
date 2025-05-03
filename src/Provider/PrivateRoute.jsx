import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router'; 
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
    // return ;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
