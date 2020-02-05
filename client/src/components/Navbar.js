import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <Link to="/userprofil">UserProfile <FontAwesomeIcon icon="user" /></Link>
          <Link to="/game">Game <FontAwesomeIcon icon="gamepad" /></Link>
          <Link to="/eventhistory">Event History <FontAwesomeIcon icon="list-alt" /></Link>
          <Link to="/guestbook">Guestbook <FontAwesomeIcon icon="address-book" /></Link>
          <Link to="/" onClick={handleLogout}>
            Logout <FontAwesomeIcon icon="sign-out-alt" />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signup">Signup <FontAwesomeIcon icon="user-plus" /></Link>
          <Link to="/login">Login <FontAwesomeIcon icon="sign-in-alt"/></Link>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
