import React from "react";
import { Footer } from "./footer";
import { Header } from "./headder";
import { Outlet } from "react-router-dom";

export function Template(){
return(

<>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
</>

);



}