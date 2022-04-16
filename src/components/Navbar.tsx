import React from "react";
import { NavbarStyled } from "./styles/Navbar.styled";
import MenuButton from "./MenuButton";
import { faHouse, faFileLines, faFileCirclePlus, faBrain, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") return <></>;
  return (
    <NavbarStyled>
      <div className="topButtons">
        <MenuButton link="/" icon={faHouse} />
        <MenuButton link="/" icon={faFileLines} />
        <MenuButton link="/editor" icon={faFileCirclePlus} />
        <MenuButton link="/" icon={faBrain} />
      </div>
      <div className="bottomButtons">
        <MenuButton link="/" icon={faCog} />
        <MenuButton link="/register" icon={faUser} />
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
