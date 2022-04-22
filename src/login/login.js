import React, { useState } from "react";
import {Form,Col,Row,Button} from 'react-bootstrap';

let defaultData={
email:'',
password:'',
remember_me:''

}
export function Login(){
                            let [data,setData]=useState(defaultData);
                            let [err , setErr]=useState(defaultData);

                            const handlechange= (ev)=>{
                                let {name, value, type} =ev.target;
                                console.log(name,value,type);
                                    setData((pre)=>{
                                            return{

                                            ...pre,
                                            [name]:value

                                     }

                                 })

                           

                               }


    return(<>
    
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" onChange={handlechange} placeholder="Email" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" onChange={handlechange} placeholder="Password" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check  onChange={handlechange} name="remember_me" label="Remember me" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
        </>);

}