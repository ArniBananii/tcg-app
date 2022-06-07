import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../components/AuthContext";

function Nav() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="cardList">Card-list</Link> |
        {user == null ? <Link to="/register">Register</Link> : ""}|
        <Link to="/favorites">Favorites</Link> |
        <Button
          variant={user == null ? "primary" : "danger"}
          onClick={
            user == null
              ? () => {
                  navigate("/login");
                }
              : logout
          }
        >
          {user == null ? "Login" : "Logout"}
        </Button>
      </nav>
    </div>
  );
}

export default Nav;
