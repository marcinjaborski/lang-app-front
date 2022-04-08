import MenuButton from "./MenuButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="topButtons">
                <MenuButton/>
                <MenuButton/>
                <MenuButton/>
                <MenuButton/>
                <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="bottomButtons">
                <MenuButton/>
                <MenuButton/>
            </div>
        </nav>
    )
}

export default Navbar;