import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    //? should this be in nav component?
    //check email type
    // password cahracters
    //blank spaces
    login(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
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
      <Button variant="contained" onClick={handleLogin}>
        login
      </Button>
      <Link to="/register">not a user? go to register</Link>
    </div>
  );
}

export default Login;
