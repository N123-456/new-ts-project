import React, { useContext, useState } from "react";
import { TextInput, Center, PasswordInput,Button } from "@mantine/core";
import myContext from "../../contextapi/InfoContext";
import InfoState from "../../contextapi/InfoState";
import { Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {info,saveData}=useContext(myContext)
  const submit=()=>{
    saveData({name,email,password});
    console.log("data:",saveData)
    navigate('/')
  }
  return (
    <div>
          <div className="w-[20%] py-4 px-4 text-black">
          <TextInput
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          /></div>
          <div className="w-[30%] py-4 px-4 text-black">
          <TextInput
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div className="py-4 px-4 text-black">
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <Button className="px-4 py-4" variant="filled" size="lg" onClick={submit} >
        Button
      </Button>
        
      
    </div>
  );
};

export default Signup;
