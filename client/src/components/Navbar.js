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
    <Nav className="nav justify-content-end" >
      {props.user ? (
        <div>
          <Link to="/main">Welcome {props.user.username}</Link>
          <Link to="/userprofil">UserProfile <FontAwesomeIcon className="FontAwesome"icon="user" /></Link>
          <Link to="/game">Game <FontAwesomeIcon  className="FontAwesome"icon="gamepad" /></Link>
          <Link to="/eventhistory">Event History <FontAwesomeIcon  className="FontAwesome"icon="list-alt" /></Link>
          <Link to="/teamgenerator">Teamgenerator <FontAwesomeIcon  className="FontAwesome"icon="campground" /></Link>
          <Link to="/guestbook">Guestbook <FontAwesomeIcon className="FontAwesome"icon="address-book" /></Link>
          <Link to="/" onClick={handleLogout}>
            Logout <FontAwesomeIcon className="FontAwesome"icon="sign-out-alt" />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/signup">Signup <FontAwesomeIcon className="FontAwesome"icon="user-plus" /></Link>
          <Link to="/login">Login <FontAwesomeIcon className="FontAwesome"icon="sign-in-alt"/></Link>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
