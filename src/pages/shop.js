import React from "react";
import Toast from 'react-bootstrap/Toast'
import { ToastContainer } from "react-bootstrap";
import logo from "../images/logo.png"
 export function Shop(){


    return(<>
        <h1>
        <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: '5px' }}
      >
        <ToastContainer position="top-end" className="p-2">
          <Toast>
            <Toast.Header>
              <img src={logo} height="30" className="rounded me-3" alt="" />
              <strong className="me-auto">Sasto Uc Bajar</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>Hi! Welcome to SUB GAMING NEPAL</Toast.Body>
          </Toast>
          
        </ToastContainer>
      </div>
        </h1>
        
        
        </>);
 }