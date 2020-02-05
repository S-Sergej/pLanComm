import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";

const Navbar = props => {
  const handleLogout = () => {
    // destroys the session on the server
    logout();
    // updates the `user` state in App
    props.setUser(null);
  };

  return (
    <Nav className="nav justify-content-end" bg="primary">
      {props.user ? (
        <div>
          <Link to="/main">Welcome {props.user.username}</Link>
          <Link to="/userprofil">UserProfile</Link>
          <Link to="/game">Game</Link>
          <Link to="/eventhistory">Event History</Link>
          <Link to="/guestbook">Guestbook</Link>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
