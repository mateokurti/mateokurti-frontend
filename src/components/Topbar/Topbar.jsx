import './topbar.scss';

import React from 'react';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#welcome" className="logo">
                        {menuOpen ? "mateo kurti": "mk."}
                    </a>
                </div>
                <div className="right">
                    <div className="menu-icon-container">
                        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
