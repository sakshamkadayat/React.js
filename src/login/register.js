import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Col,Row,Button} from 'react-bootstrap';
export function Register(){



    return(<>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email"  placeholder="Email" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhonenumber">
        <Form.Label column sm={2}>
          Phonenumber
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="phonenumber"  placeholder="Phonenumber" />
        </Col>
      </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password"  placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Confirm-Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="confirm-password"  placeholder="confirm-Password" />
        </Col>
      </Form.Group>
      
        
      
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Register</Button>
          </Col>
        </Form.Group>
      </Form>
        </>);
}