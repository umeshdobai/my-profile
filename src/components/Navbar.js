import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
    const navArr = [
        "home",
        "summary",
        "skills",
        "experience",
        "education",
        "projects",
        "certification",
        "recognition",
        "contact",
    ];
    const [activeTab, setactiveTab] = useState("HOME");
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                {navArr.map((item) => {
                    return (
                        <li
                            className={`list-item ${
                                item === activeTab && "active"
                            }`}
                            onClick={() => setactiveTab(item)}
                        >
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;
