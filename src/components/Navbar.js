import React, { useEffect, useRef } from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../static/svg/Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isMenu, setIsMenu }) => {
  const navRef = useRef();
  useEffect(() => {
    console.log(isMenu);
  }, [isMenu]);
  const navigate = useNavigate();

  const goToPage = (title) => {
    if (!isMenu) {
      navigate(title);
    }
  };

  return (
    <div className="nav-container" ref={navRef}>
      <Logo className="logo" />
      <div className="links">
        <div className="link-button" onClick={() => goToPage("/")}>
          {" "}
          Home{" "}
        </div>
        <div className="link-button" onClick={() => goToPage("/menu")}>
          {" "}
          Menu{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
