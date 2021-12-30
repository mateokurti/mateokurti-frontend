import './welcome.scss';

import React from 'react';
import Particles from 'react-particles-js';
import { particlesData } from "../../data/particles";

export default function Welcome() {
    return (
        <section id="welcome" className="container">
            <div className="content">
                <div className="block arrow">
                    <a href="#about">
                        <span></span>
                    </a>
                </div>
                <div className="block alignfull parallax">
                    <Particles className="layer particles" params={particlesData} />
                    <div className="layer introduction">
                        <p className="heading">Mateo Kurti</p>
                        <p className="sub-heading">Software Engineer</p>
                        <div className="buttons-container">
                            <a href="#about" className="button dark">
                                <p>about me</p>
                            </a>
                            <a href="mailto:hello@mateokurti.com" className="button light">
                                <p>get in touch</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
