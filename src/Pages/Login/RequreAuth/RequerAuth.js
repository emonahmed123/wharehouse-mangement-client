import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth  from "../../../firebase.init"
import Loding from '../../Shared/Loding/Loding';


const RequreAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth)
     const location =useLocation()
     if(loading){
     return <Loding></Loding>
     }

     if(!user){
         return <Navigate to="/login"   sate={{from:location}} replace> </Navigate>
     }
    return children;
       
};

export default RequreAuth;