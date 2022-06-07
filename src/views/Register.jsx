import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    //check email type
    // password cahracters
    //blank spaces

    register(email, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <label htmlFor="email">email</label>
      <input
        value={email}
        type="email"
        name="email"
        id="email"
        placeholder="enter email"
        onChange={handleEmailChange}
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        value={password}
        type="password"
        name="password"
        id="password"
        placeholder="enter password"
        onChange={handlePasswordChange}
      />
      <Button
        variant="contained"
        onClick={() => {
          handleRegister();
          navigate("/");
        }}
      >
        register
      </Button>
      <Link to="/login">already a user? go to login</Link>
    </div>
  );
}

export default Register;
