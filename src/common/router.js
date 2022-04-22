import React from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Home } from "../pages/home";
import {Template} from "../common/outlet";
import { Login } from "../login/login";
import { Shop } from "../pages/shop";
import { Contact } from "../pages/contact-us";
import { Register } from "../login/register";
 export function Ram(){
     
    
return(
    
<>

<BrowserRouter>
    <Routes>

<Route path="/" element={<Template></Template>}>
<Route exact path='/'  element={<Home></Home>}></Route>
<Route exact path='/Home'  element={<Home></Home>}></Route>
<Route exact path = '/login' element={<Login></Login>}></Route>
<Route exact path="/shop" element ={<Shop></Shop>}></Route>
<Route exact path="/Contact" element={<Contact></Contact>}></Route>
<Route exact path="/register" element={<Register></Register>}></Route>


</Route>




    </Routes>
</BrowserRouter>

</>

 );
 }