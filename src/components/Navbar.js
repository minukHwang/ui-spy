import React, { useEffect, useRef } from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../static/svg/Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isMenu, setIsMenu, menuHidden, setMenuHidden, menu }) => {
  const navRef = useRef();

  const navigate = useNavigate();

  const goToMenu = (title) => {
    if (!isMenu && !menu) {
      navigate(title);
    }
  };

  const goToHome = (title) => {
    if (!isMenu) {
      navigate(title);
    }
  };

  return (
    <div className="nav-container" ref={navRef}>
      <Logo className="logo" onClick={() => goToHome("/")} />
      {/* <div className="text">A New Format To Learn UI</div> */}
      <div className="links">
        <div className="link-button" onClick={() => goToHome("/")}>
          {" "}
          Home{" "}
        </div>
        <div className="link-button" onClick={() => goToMenu("/menu")}>
          {" "}
          Menu{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
