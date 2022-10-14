import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
    const [menuLogoState, setMenuLogoState] = useState(false);

    const toggleMenuLogoState = () => {
        setMenuLogoState((prev) => !prev);
    };

    const closeForMobileView = () => {
        setMenuLogoState(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <i className="fa-solid fa-compass" />
            </Link>
            <div className="menu-logo">
                <i
                    onClick={toggleMenuLogoState}
                    className={`fa-solid ${
                        menuLogoState ? "fa-xmark" : "fa-bars"
                    }`}
                />
            </div>
            <ul className={`nav-menu ${menuLogoState ? "active" : null}`}>
                {MenuItems.map((item) => {
                    const { className, classNameLink, itemName, to, id } = item;

                    return (
                        <li key={id} className={className}>
                            <Link
                                className={classNameLink}
                                to={to}
                                onClick={closeForMobileView}
                            >
                                {itemName}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
