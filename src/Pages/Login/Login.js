import React ,{useRef }from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail ,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loding from '../Shared/Loding/Loding';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const emailRef = useRef(' ')
  const passwordRef = useRef(' ')
  const navigate =useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

   const [sendPasswordResetEmail,sending,] = useSendPasswordResetEmail(auth );

  

     const NavigateSigup =(event)=>{
         navigate('/sigup')
     }
          if(loading){
               return <Loding></Loding>
           }

         if(user){
             navigate('/home')
            }
                 let errorElement
            if (error) {
                errorElement = <p className='text-danger'>Error: {error?.message} </p>
            
              }
     
          
    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
      }




      const ResetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
          await sendPasswordResetEmail(email);
          toast('sent email')
        }
        else{
          toast('please enter your email')
        }
      }




    return (
  
<div className='container From w-50 mx-auto login mt-5'>
        <h1 className=' text-center mt-5' > Login </h1>
  
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className='Button'  variant=" w-50 mx-auto d-block" type="submit">
            Login
          </Button>
    
         { errorElement}
          <p> Do you new? <button onClick={NavigateSigup} className='text-primary  btn'>Please Sigup</button></p>
          <p>Forget Password?<button onClick={ResetPassword} className='text-primary  btn   '>Reset password</button></p>
          <ToastContainer>

</ToastContainer>
        </Form>

</div>

    );
};

export default Login;