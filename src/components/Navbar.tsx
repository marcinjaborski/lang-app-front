import React from "react";
import { NavbarStyled } from "./styles/Navbar.styled";
import MenuButton from "./MenuButton";
import { faHouse, faFileLines, faFileCirclePlus, faBrain, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") return <></>;
  const logout = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
      })
      .catch((err) => {});
  }
  const is_logged = () => {
    fetch("http://localhost:5000/is-logged", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
      })
      .catch((err) => {});
  }
  return (
    <NavbarStyled>
      <div className="topButtons">
        <MenuButton link="/" icon={faHouse} />
        <MenuButton link="/" icon={faFileLines} />
        <MenuButton link="/editor" icon={faFileCirclePlus} />
        <MenuButton link="/" onClick={is_logged} icon={faBrain} />
      </div>
      <div className="bottomButtons">
        <MenuButton link="/" onClick={logout} icon={faCog} />
        <MenuButton link="/register" icon={faUser} />
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
