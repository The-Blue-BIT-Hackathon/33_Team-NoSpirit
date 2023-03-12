import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
export default class postJob extends Component{
    render(){
        return(
            <div>
    <div style={{backgroundColor:"white", margin:"30px",marginInline:"300px",borderRadius:"10px",padding:"30px",textAlign:"left"}}>
      <Form >
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >JobTitle</Form.Label>
          <Form.Control
            type='text'
            placeholder='Job Title'
            name='JobTitle'
            required
          />
        </Form.Group>

        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Company</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name of your Company'
            name='Job Location'
            required
          />
        </Form.Group>
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Location</Form.Label>
          <Form.Control
            type='text'
            placeholder='City/online'
            name='Job Location'
            required
          />
        </Form.Group>
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Required Skills</Form.Label>
          <Form.Control
            type='text'
            placeholder='MERN, java, etc'
            name='Job Location'
            required
          />
        </Form.Group>
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Experience</Form.Label>
          <Form.Control
            type='text'
            placeholder='Experience'
            name='Job Location'
            required
          />
        </Form.Group>
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Salary</Form.Label>
          <Form.Control
            type='Number'
            placeholder='in rupees per month'
            name='Job Location'
            required
          />
        </Form.Group>
        <Form.Group
        style={{margin:"5px"}}>
          <Form.Label >Extra Details</Form.Label>
          <Form.Control
            type='text'
            placeholder='Write Any Extra details '
            name='Job Location'
            required
          />
        </Form.Group>
        
        <Button
        
          style={{background: '#385E72',margin:"5px"}}
          type='submit'
          variant='success'>
          Post
        </Button>
      </Form>
    </div>
            </div>
        );
    }
}