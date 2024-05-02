import { PasswordInput, TextInput, Button, Center } from "@mantine/core";
import React, { useContext, useState } from "react";
import myContext from "../../contextapi/InfoContext";
import { usersData } from "../userdata/Userdata";
import Signup from "../signupfolder/Signup";
import { Navigate, useNavigate } from "react-router-dom";
interface userlogin {
  email: string;
  password: string;
}
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const {saveData}=useContext(myContext)
  const submit = () => {
    const user = usersData?.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      saveData({email,password})
      Navigate("/notification");
    } else {
      alert("incorrect Information");
    }
    console.log("user:", user);
  };
  return (
    <div>
      <div className="w-[30%] py-4 px-4 text-black">
        <TextInput
          label="Email"
          placeholder="Text input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-[20%] py-4 px-4 text-black">
        <PasswordInput
          label="Password"
          placeholder="Input placeholder"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button className="px-4" variant="filled" size="lg" onClick={submit}>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Login;
