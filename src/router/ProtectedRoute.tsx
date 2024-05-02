import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../contextapi/InfoContext";

const ProtectedRoute = ({ children }: any) => {
  const user = useContext(myContext).info;
  const navigate = useNavigate();
  return user ? navigate("/notification") : children;
};

export default ProtectedRoute;
