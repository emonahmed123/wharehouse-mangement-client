import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'

const Singup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    
  const navigate =useNavigate()
      
 const NavigateLogin = (event)=>{
   navigate('/login')
 }
 if(user){
     navigate('/home')
 }
 
 
      const  nameRef =useRef(' ')
    const emailRef = useRef(' ')
    const passwordRef = useRef(' ')
  
    const handleSigup = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password)
        createUserWithEmailAndPassword(email,password);
      }
    
    
    
    return (
        <div className='container From w-50 mx-auto login mt-5'>
        <h1 className=' text-center mt-5' > SingUp </h1>
  
        <Form onSubmit={handleSigup}>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button className='Button'  variant=" w-50 mx-auto d-block" type="submit">
            Singup
          </Button>
          <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={NavigateLogin}>Please Login</Link> </p>
        </Form>

</div>

     )
};

export default Singup;