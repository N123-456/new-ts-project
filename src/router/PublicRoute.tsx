import React,{useContext} from 'react';
import { useNavigate } from "react-router-dom";
import myContext from "../contextapi/InfoContext";
const PublicRoute = ({children}:any) => {
  const user=useContext(myContext).info;
  const navigate=useNavigate();
  
    return !user ? children : navigate("/notification");

}

export default PublicRoute;

