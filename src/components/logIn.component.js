// import React, { Component } from "react";
// import { Form, Button, Alert } from 'react-bootstrap';


// export default class logIn extends Component {
//     render() {
//         return (
//             <div>
//                 <Form.Group style={{margin:"10px"}}>
//                     <Form.Label htmlFor='email'>Email</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Your email'
//                         name='email'
//                         // onChange={handleInputChange}
//                         // value={userFormData.email}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group style={{margin:"10px"}}>
//                     <Form.Label htmlFor='password'>Password</Form.Label>
//                     <Form.Control
//                         type='password'
//                         placeholder='Your password'
//                         name='password'
//                         // onChange={handleInputChange}
//                         // value={userFormData.password}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Button
//                 style={{margin:"10px"}}
//                     //   disabled={!(userFormData.email && userFormData.password)}
//                     //   style={{background: '#385E72'}}
//                     type='submit'
//                     variant='success'>
//                     Submit
//                 </Button>
//             </div>
//         );
//     }
// }


// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// import { Button, Checkbox, Form } from 'semantic-ui-react'

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

//   const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // try {

    //   const { data } = await login({
    //     variables: { ...userFormData }
    //   });

    //   Auth.login(data.login);

    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div style={{backgroundColor:"white", margin:"30px",marginInline:"300px",borderRadius:"10px",padding:"30px",textAlign:"left"}}>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group
        style={{margin:"10px"}}>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group
        style={{margin:"10px"}}>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
        
          disabled={!(userFormData.email && userFormData.password)}
          style={{background: '#385E72',margin:"10px"}}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
