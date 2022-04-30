import React ,{useRef }from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail ,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
     const navigate =useNavigate()

     const NavigateSigup =(event)=>{
         navigate('/sigup')
     }
         if(user){
             navigate('/home')
            }
                 let errorElement
            if (error) {
                errorElement = <p className='text-danger'>Error: {error?.message} </p>
            
              }
     
      const emailRef = useRef(' ')
      const passwordRef = useRef(' ')
 
    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
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
       
        </Form>

</div>

    );
};

export default Login;