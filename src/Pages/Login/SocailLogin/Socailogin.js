import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Loding from '../../Shared/Loding/Loding';
const Socailogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error ) {
        errorElement= <p className='text-danger'> Error: {error?.message} </p>

    }
if(loading){
    return <Loding></Loding>
}
    
    if (user ) {
        navigate('/home')
    }
    
    
    return (
        <div>
        <div className='d-flex  align-items-center'>

            <div style={{ height: '1px' }} className='bg-primary w-50'> </div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        </div>
        <div className=' '>
            <button onClick={()=>signInWithGoogle()} className='btn btn-dark d-block w-50  mx-auto my-2 '>
                <img style={{ width: '30px' }} src='' alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            {errorElement}
            
         
        </div>

    </div>
);

};

export default Socailogin;