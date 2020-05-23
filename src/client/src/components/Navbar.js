import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Spring} from 'react-spring/renderprops'

const Navbar = props => {
  const handleLogout = () => {
    // destroys the session on the server
    logout();
    // updates the `user` state in App
    props.setUser(null);
  };

  return (
    <Nav className="nav justify-content-end">
      {props.user ? (
        <div >
          <Link to="/main">Welcome {props.user.username}</Link>
          <Link to="/userprofil">UserProfile <FontAwesomeIcon className="FontAwesome"icon="user" /></Link>
          <Link to="/game">Game <FontAwesomeIcon  className="FontAwesome"icon="gamepad" /></Link>
          <Link to="/eventhistory">Event History <FontAwesomeIcon  className="FontAwesome"icon="list-alt" /></Link>
          <Link to="/guestbook">Guestbook <FontAwesomeIcon className="FontAwesome"icon="address-book" /></Link>
          <Link to="/" onClick={handleLogout}>
            Logout <FontAwesomeIcon className="FontAwesome"icon="sign-out-alt" />
          </Link>
        </div>
      ) : (
        <div>
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{delay: 6000, duration: 2000}}>
            {props => <div style={props}>
              <Link to="/signup">Signup <FontAwesomeIcon className="FontAwesome"icon="user-plus" /></Link>
              <Link to="/login">Login <FontAwesomeIcon className="FontAwesome"icon="sign-in-alt"/></Link></div>}
        </Spring>
          
        </div>
      )}
    </Nav>
  );
};

export default Navbar;
