import MenuButton from "./MenuButton";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="topButtons">
        <MenuButton link="/" icon={faHouse} />
        <MenuButton link="/" icon={faFileLines} />
        <MenuButton link="/editor" icon={faFileCirclePlus} />
        <MenuButton link="/" icon={faBrain} />
      </div>
      <div className="bottomButtons">
        <MenuButton link="/" icon={faCog} />
        <MenuButton link="/" icon={faUser} />
      </div>
    </nav>
  );
};

export default Navbar;
