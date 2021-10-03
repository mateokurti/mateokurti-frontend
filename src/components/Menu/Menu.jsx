import './menu.scss';

import React from 'react';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu-content " + (menuOpen && "active")}>
            <ul>
                <li><a href="#welcome" onClick={() => setMenuOpen(false)}>Welcome</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                {/* <li><a href="#career" onClick={() => setMenuOpen(false)}>Career</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li> */}
                <li className="disabled">Career</li>
                <li className="disabled">Projects</li>
                <li className="disabled">Testimonials</li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </div>
    )
}
