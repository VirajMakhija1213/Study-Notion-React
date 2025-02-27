import React from 'react'
import { Navigate } from 'react-router';

export default function PrivateRoute({isLoggedIn,children}) {
    if(isLoggedIn)
        return children;
    else{
        return <Navigate to="/login"/>
    }
  return (
    <div>
      
    </div>
  )
}
