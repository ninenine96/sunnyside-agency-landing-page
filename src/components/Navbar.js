import React from "react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };
    return (
        <nav className="nav-container">
            <h2 className="nav-logo">sunnyside</h2>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={closeMenu}>
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={closeMenu}>
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" onClick={closeMenu}>
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link-button" href="/" onClick={closeMenu}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
