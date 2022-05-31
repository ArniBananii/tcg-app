import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../components/AuthContext";

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  const login = () => {
    setUser({ userName: "Arno" });
    console.log("user", user);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="cardList">Card-list</Link> |
        <Button
          variant={user == null ? "primary" : "danger"}
          onClick={user == null ? login : logout}
        >
          {user == null ? "Login" : "logout"}
        </Button>
      </nav>
    </div>
  );
}

export default Nav;
