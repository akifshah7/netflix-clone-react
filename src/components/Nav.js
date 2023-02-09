import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show,setShow] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            setShow(true);
        }else {
            setShow(false);
        }
    });
    return () => {
        window.removeEventListener("scroll",null);
    };
  },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Nav Avatar"
      />
    </div>
  );
}

export default Nav;
